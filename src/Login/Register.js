import React, { useState } from "react";
import "./Register.css";

import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";

const registerUrl = "https://developerjwt.herokuapp.com/api/auth/register";

function Register() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  let navigate = useNavigate();

  // handle change event for user input
  const handleChange = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  //submit event
  const handleSubmit = () => {
    // fetch method to POST new user form details
    fetch(registerUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(register),
    });
    navigate("/");
  };

  return (
    //registeration form
    <div className="loginClass">
      <div className="loginForm">
        <div className="heading">
          <LockIcon />
          <span>SignUp</span>
        </div>
        <div>{register.message}</div>
        <br />
        <div className="formfield">
          <label htmlFor="name">Name*</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            value={register.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
          <br />
          <label htmlFor="email">Email*</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={register.email}
            onChange={handleChange}
            placeholder="ex:abc@gmail.com"
            required
          />
          <br />
          <label htmlFor="phone">Contact Number*</label>
          <br />
          <input
            type="text"
            name="phone"
            id="phone"
            value={register.phone}
            onChange={handleChange}
            placeholder="Enter number"
            required
          />
          <br />

          <label htmlFor="phone">Password*</label>
          <br />
          <input
            type="text"
            name="password"
            id="password"
            value={register.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
          <br />
          <br />
          <button className="registerButton" onClick={handleSubmit}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
