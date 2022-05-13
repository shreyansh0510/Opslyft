import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Nav from "./Navbar/Nav";
import Login from "./Login/Login";
import Register from "./Login/Register";
import App from "./App";

const Routing = () => {
  return (
    <div className="appClass">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/app" element={<App />} />
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
