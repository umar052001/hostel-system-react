import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Modals = ({ operations, id, email }) => {
  const [hostel, setHostel] = useState({
    size: "",
    price: "",
    location: "",
    airconditioner: "",
    gas: "",
  });

  const handleChange = (event) => {
    setHostel({ ...hostel, [event.target.name]: event.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/addHostels/${email}`, hostel)
      .then(function (response) {
        if (response.status === 200) {
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/updateHostels/${id}`, hostel)
      .then(function (response) {
        if (response.status === 200) {
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="success"
        size="small"
      >
        {operations}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {operations}
          </Typography>
          <form onSubmit={operations === "Edit" ? handleEdit : handleAdd}>
            <ul style={{ "list-style": "none" }}>
              <li>
                <TextField
                  onChange={handleChange}
                  name="size"
                  id="standard-basic"
                  label="Rooms"
                  variant="standard"
                />
              </li>
              <li>
                <TextField
                  onChange={handleChange}
                  id="standard-basic"
                  label="AC"
                  name="airconditioner"
                  variant="standard"
                />
              </li>
              <li>
                <TextField
                  onChange={handleChange}
                  name="gas"
                  id="standard-basic"
                  label="Gas"
                  variant="standard"
                />
              </li>
              <li>
                <TextField
                  onChange={handleChange}
                  name="price"
                  id="standard-basic"
                  label="Price"
                  variant="standard"
                />
              </li>
              <li>
                <TextField
                  onChange={handleChange}
                  name="location"
                  id="standard-basic"
                  label="Location"
                  variant="standard"
                />
              </li>
            </ul>
            <Button
              type="submit"
              variant="contained"
              color="success"
              size="small"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Modals;
