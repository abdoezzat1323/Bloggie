import TopBar from "../../component/topbar/TopBar";
import "./signup.css"
import axios from "axios";
import React, { Component } from "react";

class Register extends React.Component  {
  

    constructor(props) {
     
      super(props);
      // this.handleSubmit = this.handleSubmit.bind(this);
      this.props = props;
      this.email = React.createRef();
      this.password = React.createRef();
      this.loginEmail = React.createRef();
      this.loginPassword = React.createRef();
      this.firstName = React.createRef();

    }

    Register = (event) => {
      let data = {
        email: this.email.current.value,
        firstName: this.firstName.current.value,
        lastName: this.lastName.current.value,
        password: this.password.current.value,
      };
      event.preventDefault();
  
      console.log(data);
      axios.post("http://127.0.0.1:5000/api/user", data).then(
        (response) => {
          console.log(response);
          this.props.navigation.navigate('/')
        },
        (error) => {
          console.log(error);
          this.props.navigation.navigate('/home')
        }
      );
    };
  render(){
    const { navigation } = this.props;
    return (
      <>
        <TopBar />
        <div className="register">
          <span className="registerTitle customfont1 ">Register</span>
          <form onSubmit={this.Register} className="registerForm">
            <label className="customfont1 lablesize">FirstName</label>
            <input className="registerInput" name="firstName" type="usernam" id="firstName" ref={this.firstName} placeholder="Enter your FirstName..." />
            <label className="customfont1 lablesize">LastName</label>
            <input className="registerInput" name="lastName" type="usernam" ref={this.lastName} id="lastName" placeholder="Enter your LastName..." />
            <label className="customfont1 lablesize ">Email</label>
            <input className="registerInput" name="email" type="email" ref={this.email} id="email" placeholder="Enter your email..." />
            <label className="customfont1 lablesize">Password</label>
            <input className="registerInput " name="password" type="password" ref={this.password} id="password" placeholder="Enter your password..." />
            <button className="registerButton">Register</button>
          </form>
          <a href="/login"> <button className="registerLoginButton ">Login</button></a>
        </div>
      </>
    );
  }
}
export default Register;