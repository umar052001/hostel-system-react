import React from "react";
import SignInForm from "../signin-form/signin-form.component";
import "./sign-in.styles.css";
const SignIn = () => {
  return (
    <div className="signin-container">
      <SignInForm title="Sign In" />
    </div>
  );
};

export default SignIn;
