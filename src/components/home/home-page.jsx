import React from "react";
import "./home-page.styles.css";
import SignUpForm from "../signup-form/signup-form.component";
const HomePage = () => {
  return (
    <div>
      <div className="container">
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          tenetur eos eius nam illo tempora dolore quo officiis reprehenderit ad
          aliquam inventore, natus cumque quia!
        </p>
      </div>
      <span>
        <SignUpForm title="Sign Up" />
      </span>
    </div>
  );
};

export default HomePage;
