import "./Login.css";
import TopBar from "../../component/topbar/TopBar";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Login() {

  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();
 
  const errors = {
    email: "invalid Email",
    pass: "invalid password"
  };

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    let { email, pass } = document.forms[0];

  // get user data 
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/user");
        console.log(response);
      } catch (err){
        console.log(err);
        return
    }

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        navigate('/');
      }
    } else {
      // Username not found
      setErrorMessages({ name: "email", message: errors.email });
    }
    
  }

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div> 
    );
  return (
    <>
    <TopBar/>
    <div className="login">
      <span className="loginTitle customfont1">Login</span>
      <form onSubmit={handleSubmit} className="loginForm">
        <label className="lablesize customfont1">Email</label>
        <input  className="registerInput " name="email" type="email" placeholder="Enter your email..." />
        {renderErrorMessage("email")}
        <label className="lablesize customfont1" >Password</label>
        <input className="registerInput" name="pass"  type="password" placeholder="Enter your password..." />
        {renderErrorMessage("pass")}
        <button className="loginButton">Login</button>
      </form>
        <a href="/register" ><button  className="loginRegisterButton">Register</button></a>
    </div>
    </>
  );
}