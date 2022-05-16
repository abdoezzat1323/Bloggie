import "./topbar.css";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { logout, isLoggedIn } from "../../services/authService";
import { getTitle } from "../../services/blogServices";

import Navbar from "../sidebar/Navbar";

export default function topBar(props) {
  let AuthButton, AuthLabel, AuthHref, AuthOn;
  if (isLoggedIn()) {
    AuthButton = (
      <a href="/" onClick={logout}>
        <div className="headerItem">
          <span>
            <span className="headerLabel"> Logout </span>
            <FiLogOut className="headerIcon"></FiLogOut>
          </span>
        </div>
      </a>
    );
  } else {
    AuthButton = (
      <a href="/login">
        <div className="headerItem">
          <span className="headerLabel"> Login </span>
          <FiLogIn className="headerIcon"></FiLogIn>
        </div>
      </a>
    );
  }
  return (
    <header>
      <NotificationContainer />
      <div className="left_section sizeleft" auth={1}>
        {(!props.auth && <Navbar />) || <span></span>}
      </div>
      <div className="center_section">
        <a href="/">
          <label className="logolable">{getTitle()}</label>
        </a>
      </div>
      {(isLoggedIn() && (
        <div className="dropdown">
          <img
            className="right_section  sizeright avatar"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt="Avatar"
          ></img>
          <div className=" item ">{AuthButton}</div>
        </div>
      )) || <div className=" right_section  sizeright ">{AuthButton}</div>}
    </header>
  );
}
