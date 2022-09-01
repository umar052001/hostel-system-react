import "./table.styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Modals from "../modal/modal.component";

const Table = ({ userEmail }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getOwnerHostels/${userEmail}`)
      .then(function (response) {
        setTableData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userEmail, tableData]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/deleteHostels/${id}`)
      .then(function (response) {
        console.log("Deleted");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Rooms</th>
          <th>Price</th>
          <th>Location</th>
          <th>AC</th>
          <th>Gas</th>
          <th>Edit</th>
          <th>Remove</th>

          <Modals operations="Add" email={userEmail} />
        </tr>
        {tableData.map((data, key) => {
          return (
            <tr>
              <td>{data.id}</td>
              <td>{data.size}</td>
              <td>{data.price}</td>
              <td>{data.location}</td>
              <td>{data.airconditioner}</td>
              <td>{data.gas}</td>
              <td>
                <Modals operations="Edit" id={data.id} />
              </td>
              <td>
                <Button
                  onClick={() => handleDelete(data.id)}
                  variant="contained"
                  color="error"
                  size="small"
                >
                  Remove
                </Button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
