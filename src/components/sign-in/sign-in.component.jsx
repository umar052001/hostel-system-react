import React from "react";
import SignInForm from "../signin-form/signin-form.component";
import "./sign-in.styles.css";
const SignIn = ({
  setIsOwnerSignedIn,
  setIsTenantSignedIn,
  doSignIn,
  setDoSignIn,
}) => {
  return (
    <div className="signin-container">
      <SignInForm
        setIsOwnerSignedIn={setIsOwnerSignedIn}
        setIsTenantSignedIn={setIsTenantSignedIn}
        doSignIn={doSignIn}
        setDoSignIn={setDoSignIn}
      />
    </div>
  );
};

export default SignIn;
