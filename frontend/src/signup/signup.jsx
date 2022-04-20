import TopBar from "../../src/topbar/TopBar";
import React, { Component } from 'react';
import "./signup.css"


class Register  extends Component {

  render() { 
    return (
           <>
           <TopBar/>
            <div className="container">
              <div className="screen">
                <div className="screen__content">
                  <form className="login">
                  <div className="login__field">
                      <i className="login__icon fas fa-user" />
                      <input type="text" className="login__input" placeholder=" First_Name" />
                    </div>
                    <div className="login__field">
                      <i className="login__icon fas fa-user" />
                      <input type="text" className="login__input" placeholder=" Last_Name" />
                    </div>
                    <div className="login__field">
                      <i className="login__icon fas fa-user" />
                      <input type="text" className="login__input" placeholder="Email" />
                    </div>
                    <div className="login__field">
                      <i className="login__icon fas fa-lock" />
                      <input type="password" className="login__input" placeholder="Password" />
                    </div>
                    <button className="button login__submit">
                      <span className="button__text">SignUP Now</span>
                      <i className="button__icon fas fa-chevron-right" />
                    </button>				
                  </form>
                  <div className="social-login">
                    
                  </div>
                </div>
                <div className="screen__background">
                  <span className="screen__background__shape screen__background__shape4" />
                  <span className="screen__background__shape screen__background__shape3" />		
                  <span className="screen__background__shape screen__background__shape2" />
                  <span className="screen__background__shape screen__background__shape1" />
                </div>		
              </div>
            </div>
            </>

    );
  }
}
 
export default Register ;