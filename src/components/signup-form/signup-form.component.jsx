import React from "react";
import "./signup-form.styles.css";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/signin");
  return (
    <form className="container">
      <h2 className="signUp">Sign Up</h2>
      <label> Name </label>
      <input type="text" name="name" />
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
