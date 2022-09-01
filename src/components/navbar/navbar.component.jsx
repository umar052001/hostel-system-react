import React from "react";
import "./navbar.styles.jsx";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import {
  NavbarContainer,
  NavbarHeading,
  StyledButton,
} from "./navbar.styles.jsx";

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
      <NavbarContainer>
        <Logo />
        <NavbarHeading>Royal Hostel</NavbarHeading>
        <div>
          {isOwnerSignedIn || isTenantSignedIn ? (
            <StyledButton onClick={handleSignOut}>Sign Out</StyledButton>
          ) : (
            <>
              <StyledButton onClick={handleNavigationHome}>
                Sign up
              </StyledButton>
              <StyledButton onClick={handleNavigationSignin}>
                Sign In
              </StyledButton>
            </>
          )}
        </div>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
