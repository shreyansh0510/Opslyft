import React, { useState } from "react";
import "./Login.css";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

const loginUrl = "https://developerjwt.herokuapp.com/api/auth/login";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    message: "",
  });

  let navigate = useNavigate();

  //handle change event for user input
  const handleChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    // fetch method to POST
    fetch(loginUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((data) => {
        // checks if user is NOT found i.e. false
        if (data.auth === false) {
          // sets the message state to data.token which is just a message
          setLogin({ message: data.token });
        } else {
          // if user is found i.e. authenticated
          // assigns data.token message to ltk key or variable using .setItem() method
          sessionStorage.setItem("ltk", data.token);
          // user is navigated to App
          navigate("/app");
        }
      });
  };

  return (
    <div className="loginClass">
      <div className="loginForm">
        <div className="heading">
          <LoginIcon />
          <span>LogIn</span>
        </div>
        <div>{login.message}</div>
        <br />
        <div className="formfield">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={login.email}
            onChange={handleChange}
            placeholder="abc@gmail.com"
            required
          />
          <br />
          <label htmlFor="phone">Password</label>
          <br />
          <input
            type="text"
            name="password"
            id="password"
            value={login.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
          <br />
          <button className="submitButton" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
