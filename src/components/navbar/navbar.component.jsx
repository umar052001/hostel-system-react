import React from "react";
import "./navbar.styles.css";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  isOwnerSignedIn,
  isTenantSignedIn,
  setIsOwnerSignedIn,
  setIsTenantSignedIn,
}) => {
  const navigate = useNavigate();
  const handleNavigationHome = () => navigate("/");
  const handleNavigationSignin = () => navigate("/signin");
  const handleSignOut = () => {
    navigate("/");
    setIsOwnerSignedIn(false);
    setIsTenantSignedIn(false);
  };
  return (
    <div>
      <nav className="navbar">
        <Logo />
        <h1>Royal Hostel</h1>
        <div>
          {isOwnerSignedIn || isTenantSignedIn ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <>
              <button onClick={handleNavigationHome}>Sign up</button>
              <button onClick={handleNavigationSignin}>Sign In</button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
