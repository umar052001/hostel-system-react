import React from "react";
import "./navbar.styles.css";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigationHome = () => navigate("/");
  const handleNavigationSignin = () => navigate("/signin");
  return (
    <div>
      <nav className="navbar">
        <Logo />
        <h1>Royal Hostel</h1>
        <div>
          <button onClick={handleNavigationSignin}>Sign In</button>
          <button onClick={handleNavigationHome}>Sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
