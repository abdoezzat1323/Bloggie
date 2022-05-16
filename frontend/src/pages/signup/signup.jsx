import Auth_TopBar from "../../component/topbar/Auth_TopBar";
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { signup } from "../../services/userService";
import { isLoggedIn } from "../../services/authService";
import "./signup.css";

function Register() {
  const navigate = useNavigate();
  if (isLoggedIn()) navigate("/");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let { email, firstName, lastName, password } = document.forms[0];

    // verify user
    let userData = {
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value,
    };
    let res = await signup(userData);
    if (res) {
      navigate("/");
    }
  };

  return isLoggedIn() ? (
    <Navigate to="/" />
  ) : (
    <>
      <Auth_TopBar />
      <div className="register">
        <span className="registerTitle customfont1 ">Register</span>
        <form onSubmit={handleSubmit} className="registerForm">
          <label className="customfont1 lablesize">FirstName</label>
          <input
            className="registerInput"
            name="firstName"
            type="usernam"
            id="firstName"
            placeholder="Enter your FirstName..."
          />
          <label className="customfont1 lablesize">LastName</label>
          <input
            className="registerInput"
            name="lastName"
            type="usernam"
            id="lastName"
            placeholder="Enter your LastName..."
          />
          <label className="customfont1 lablesize ">Email</label>
          <input
            className="registerInput"
            name="email"
            type="email"
            id="email"
            placeholder="Enter your email..."
          />
          <label className="customfont1 lablesize">Password</label>
          <input
            className="registerInput "
            name="password"
            type="password"
            id="password"
            placeholder="Enter your password..."
          />
          <button className="registerButton">Register</button>
        </form>

      </div>
    </>
  );
}

export default Register;
