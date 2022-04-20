import TopBar from "../../src/topbar/TopBar";
import "./signup.css"

export default function Register() {
    return (
      <>
      <TopBar/>
      <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
       <a href="/login" > <button className="registerLoginButton">Login</button></a>
    </div>
    </>
    )
}
