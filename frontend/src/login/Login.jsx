import React, { Component } from 'react';
import './Login.css';
import axios from "axios";
const FormItem = Form.Item;

class Login extends Component {
  
  
  render() {
   
    return (


      <div >
      <div className="lItem">
          <div className="loginImage">
            <img src="https://github.com/elinsoftware/portal-login-react/blob/master/src/login.png" width="300" style={{position: 'relative'}} alt="login"/>
          </div>
          <div className="loginForm">
            <h2>Login</h2>

                  <Input
                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                    placeholder="Username"
                  />


                  <Input
                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password"
                    placeholder="Password"
                  />



                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>

          </div>
      </div>
      <div className="footer">
        <a href="" target="_blank" rel="noopener noreferrer" className="footerLink">Powered by React</a>
      </div>
      </div>
    );
  }
}



export default Login;