import TopBar from "../../component/topbar/TopBar";
import "./signup.css"
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Register()  {
  

    
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();
 
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let { email, firstName , lastName ,password } = document.forms[0];
     console.log(email.value, firstName.value , lastName.value ,password.value)

      setErrorMessages({ name: "email", message:"Email alredy exisit"});
    
    
  }

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div> 
    );
  

    // Register = (event) => {
    //   let data = {
    //     email: this.email.current.value,
    //     firstName: this.firstName.current.value,
    //     lastName: this.lastName.current.value,
    //     password: this.password.current.value,
    //   };
    //   event.preventDefault();
  
    //   console.log(data);
    //   axios.post("http://127.0.0.1:5000/api/user", data).then(
    //     (response) => {
    //       console.log(response);
    //       this.props.navigation.navigate('/')
    //     },
    //     (error) => {
    //       console.log(error);
    //       this.props.navigation.navigate('/home')
    //     }
    //   );
    // };

   
    return (
      <>
        <TopBar />
        <div className="register">
          <span className="registerTitle customfont1 ">Register</span>
          <form onSubmit={handleSubmit} className="registerForm">
            <label className="customfont1 lablesize">FirstName</label>
            <input className="registerInput" name="firstName" type="usernam" id="firstName"  placeholder="Enter your FirstName..." />
            <label className="customfont1 lablesize">LastName</label>
            <input className="registerInput" name="lastName" type="usernam"  id="lastName" placeholder="Enter your LastName..." />
            <label className="customfont1 lablesize ">Email</label>
            <input className="registerInput" name="email" type="email"  id="email" placeholder="Enter your email..." />
            {renderErrorMessage("email")}
            <label className="customfont1 lablesize">Password</label>
            <input className="registerInput " name="password" type="password" id="password" placeholder="Enter your password..." />
            {renderErrorMessage("password")}
            <button className="registerButton">Register</button>
          </form>
          <a href="/login"> <button className="registerLoginButton ">Login</button></a>
        </div>
      </>
    );
  }

export default Register;