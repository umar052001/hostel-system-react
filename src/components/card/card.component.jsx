import React from "react";
import "./card.styles.css";
import axios from "axios";
import { useState } from "react";
const Card = () => {
  const [tenantData, setTenantData] = useState([]);
  axios
    .get("http://localhost:3001/getTenantHostels")
    .then(function (response) {
      setTenantData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <>
      {tenantData.map((data, key) => {
        return (
          <div class="card">
            <img
              src="https://picsum.photos/200/300"
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div class="card-container">
              <h4>
                <b>Price: {data.price}$</b>
              </h4>
              <p>Email: {data.email}</p>
              <p>Size: {data.size}</p>
              <p>Location: {data.location}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
