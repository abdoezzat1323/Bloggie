import "./Login.css";
import TopBar from "../../component/topbar/TopBar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import axios from "axios";

export default function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();

  const errors = {
    409: "Email already exist!",
    pass: "invalid password",
  };

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    let { email, pass } = document.forms[0];

    // verify user
    let userData = {
      email: email.value,
      password: pass.value,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/auth/login",
        userData
      );
      navigate("/");
      // NotificationManager.success(response.data.data, "Success", 3000);
    } catch (err) {
      if (err.response) {
        NotificationManager.error(err.response.data.data, "Error", 3000);
      } else {
        NotificationManager.error("Server is down!", "Error", 3000);
      }
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  return (
    <>
      <TopBar />
      <div className="login">
        <span className="loginTitle customfont1">Login</span>
        <form onSubmit={handleSubmit} className="loginForm">
          <label className="lablesize customfont1">Email</label>
          <input
            className="registerInput "
            name="email"
            type="email"
            placeholder="Enter your email..."
          />
          <label className="lablesize customfont1">Password</label>
          <input
            className="registerInput"
            name="pass"
            type="password"
            placeholder="Enter your password..."
          />
          <button className="loginButton">Login</button>
        </form>
        <a href="/register">
          <button className="loginRegisterButton">Register</button>
        </a>
      </div>
    </>
  );
}
