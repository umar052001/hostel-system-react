import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./signin-form.styles.css";
import { StyledButton } from "../navbar/navbar.styles";

const SignInForm = ({
  setIsOwnerSignedIn,
  setIsTenantSignedIn,
  doSignIn,
  setDoSignIn,
}) => {
  const navigate = useNavigate();
  const handleNavigateHome = () => navigate("/");
  const handleNavigateOwnerPanel = () => navigate("/owner");
  const handleNavigateTenantPanel = () => navigate("/tenant");

  const handleChange = (event) => {
    setDoSignIn({ ...doSignIn, [event.target.name]: event.target.value });
  };
  const handleOwnerSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signinOwner", doSignIn)
      .then(function (response) {
        if (response.status === 200) {
          setIsOwnerSignedIn(true);
          handleNavigateOwnerPanel();
          console.log(doSignIn);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleTenantSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signinTenant", doSignIn)
      .then(function (response) {
        if (response.status === 200) {
          setIsTenantSignedIn(true);
          handleNavigateTenantPanel();
          console.log(doSignIn);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form
      className="container"
      onSubmit={
        doSignIn.type === "owner" ? handleOwnerSubmit : handleTenantSubmit
      }
    >
      <h2 className="signUp">Sign In</h2>
      <label> Email </label>
      <input type="email" name="email" onChange={handleChange} />
      <label> Password </label>
      <input type="password" name="password" onChange={handleChange} />
      <label>Choose type:</label>
      <div>
        <select name="type" id="type" onChange={handleChange}>
          <option name="type" value="owner" onChange={handleChange}>
            Owner
          </option>
          <option name="type" value="tenant" onChange={handleChange}>
            Tenant
          </option>
        </select>
      </div>
      <div>
        <StyledButton type="submit">Sign In</StyledButton>
        Don't have an account?
        <a onClick={handleNavigateHome} style={{ fontSize: "13px" }}>
          Sign Up
        </a>
      </div>
    </form>
  );
};

export default SignInForm;
