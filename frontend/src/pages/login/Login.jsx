import TopBar from "../../component/topbar/TopBar";
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { login, isLoggedIn } from "../../services/authService";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let { email, pass } = document.forms[0];

    let userData = {
      email: email.value,
      password: pass.value,
    };

    let res = await login(userData);
    if (res) navigate("/");
  };

  return isLoggedIn() ? (
    <Navigate to="/" />
  ) : (
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
