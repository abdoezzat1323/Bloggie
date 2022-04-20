import "./Login.css";
import TopBar from "../../src/topbar/TopBar";
export default function Login() {
  return (
    <>
    <TopBar/>
    <div className="login">
      <span className="loginTitle customfont1">Login</span>
      <form className="loginForm">
        <label className="lablesize customfont1">Email</label>
        <input className="registerInput " type="text" placeholder="Enter your email..." />
        <label className="lablesize customfont1" >Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
        <a href="/register" ><button  className="loginRegisterButton">Register</button></a>
    </div>
    </>
  );
}