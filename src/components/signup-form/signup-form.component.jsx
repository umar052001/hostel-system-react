import React from "react";
import "./signup-form.styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const SignUpForm = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/signin");

  const [SignUp, setSignUp] = useState({
    email: "",
    name: "",
    password: "",
    type: "owner",
  });

  const handleChange = (event) => {
    setSignUp({ ...SignUp, [event.target.name]: event.target.value });
  };

  const handleOwnerSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signupOwner", SignUp)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleTenantSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signupTenant", SignUp)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form
      className="container"
      onSubmit={
        SignUp.type === "owner" ? handleOwnerSubmit : handleTenantSubmit
      }
    >
      <h2 className="signUp">Sign Up</h2>
      <label> Name </label>
      <input type="text" name="name" onChange={handleChange} />
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
        <button type="submit">Sign Up</button>
        Already have an account?
        <a onClick={handleNavigate} style={{ fontSize: "13px" }}>
          Sign In
        </a>
      </div>
    </form>
  );
};

export default SignUpForm;
