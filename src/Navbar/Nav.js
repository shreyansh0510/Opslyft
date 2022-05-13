import React, { useEffect, useState } from "react";
import "./Nav.css";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { Link, useNavigate } from "react-router-dom";

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";

function Nav() {
  const [records, setRecords] = useState({
    userData: "",
  });

  let navigate = useNavigate();

  // clear sessionStorage
  const handleLogout = () => {
    setRecords({ userData: "" });
    sessionStorage.removeItem("ltk");
    sessionStorage.removeItem("rtk");
    sessionStorage.removeItem("userData");
    navigate("/");
  };

  const conditionalHeader = () => {
    if (records.userData.name) {
      //if user  logged in
      let data = records.userData;
      let ouputArray = [data.name, data.email, data.phone, data.role];
      sessionStorage.setItem("userData", ouputArray);
      return (
        <>
          <nav className="nav">
            <div className="navContent">
              <div className="title">Covid-19 Tracker</div>

              <div className="loginSignup">
                <div className="greet">
                  Hi, <span className="username">{ouputArray[0]}</span> ✋
                </div>
                &nbsp;&nbsp;&nbsp;
                <span className="logout" onClick={handleLogout}>
                  <LogoutIcon />
                  <span>Logout</span>
                </span>
              </div>
            </div>
          </nav>
        </>
      );
    }
    //if user not logged in
    else {
      return (
        <>
          <nav className="nav">
            <div className="navContent">
              <div className="title">Covid-19 Tracker</div>
              <div className="loginSignup">
                <Link to="/">
                  <div className="login">
                    <LoginIcon />
                    <span>Login</span>
                  </div>
                </Link>

                <Link to="/register">
                  <div className="signup">
                    <LockOpenIcon />
                    <span>SignUp</span>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </>
      );
    }
  };

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "x-access-token": sessionStorage.getItem("ltk"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRecords({ userData: data });
      });
  }, [sessionStorage.getItem("ltk")]);

  return <>{conditionalHeader()}</>;
}

export default Nav;
