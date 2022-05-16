import "./topbar.css";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { logout, isLoggedIn } from "../../services/authService";
import { getTitle } from "../../services/blogServices";

import Navbar from "../sidebar/Navbar";

export default function topBar() {
  let AuthButton, AuthLabel, AuthHref, AuthOn;
  if (isLoggedIn()) {
    AuthButton = (
      <a href="/" onClick={logout}>
        <div className="headerItem">
          <span className="headerLabel"> Logout </span>
          <FiLogOut className="headerIcon"></FiLogOut>
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
      <div className="left_section sizeleft">
        <Navbar />
      </div>
      <div className="center_section">
        <a href="/">
          <label className="logolable">{getTitle()}</label>
        </a>
      </div>
      <div className="right_section  sizeright ">{AuthButton}</div>
    </header>
  );
}
