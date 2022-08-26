import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./signin-form.styles.css";

const SignInForm = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/");

  // const handleChange = (event) => {
  //   setSignIn({ ...SignIn, [event.target.id]: event.target.value });
  // };
  // const handleOwnerSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3001/signinOwner", SignIn)
  //     .then(function (response) {
  //       if (response.status === 200) {
  //         setIsSignedIn(true);
  //         setIsOwner(true);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <form className="container">
      <h2 className="signUp">Sign In</h2>
      <label> Email </label>
      <input type="email" name="email" />
      <label> Password </label>
      <input type="password" name="password" />
      <label>Choose type:</label>
      <div>
        <select name="type" id="type">
          <option name="owner" value="owner">
            Owner
          </option>
          <option name="tenant" value="tenant">
            Tenant
          </option>
        </select>
      </div>
      <div>
        <button type="submit">Sign In</button>
        Don't have an account?
        <a onClick={handleNavigate} style={{ fontSize: "13px" }}>
          Sign Up
        </a>
      </div>
    </form>
  );
};

export default SignInForm;
