import React from "react";

import "./signin-form.styles.css";

import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/");
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
