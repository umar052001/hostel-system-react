import React from "react";
import "./card.styles.jsx";
import axios from "axios";
import { useState } from "react";

import { CardContainer, CardDiv } from "./card.styles.jsx";

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
          <CardDiv>
            <img
              src={`https://picsum.photos/${data.size}00/300`}
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <CardContainer>
              <h4>
                <b>Price: {data.price}$</b>
              </h4>
              <p>Email: {data.owneremail}</p>
              <p>Size: {data.size}</p>
              <p>Location: {data.location}</p>
            </CardContainer>
          </CardDiv>
        );
      })}
    </>
  );
};

export default Card;
