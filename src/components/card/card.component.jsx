import React from "react";
import "./card.styles.css";
const Card = () => {
  return (
    <div class="card">
      <img
        src="https://images.pexels.com/photos/5599599/pexels-photo-5599599.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Avatar"
        style={{ width: "100%" }}
      />
      <div class="card-container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};

export default Card;
