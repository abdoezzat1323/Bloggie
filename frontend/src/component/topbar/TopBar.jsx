import "./topbar.css";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { FiLogOut } from "react-icons/fi";
import Navbar from "../sidebar/Navbar";

export default function topBar() {
  return (
    <header>
      <NotificationContainer />
      <div className="left_section sizeleft">
          <Navbar/>
      </div>
      <div className="center_section">
        <label className="logolable">Blog</label>
      </div>
      <div className="right_section  sizeright ">
        <a className="headerLabel" href="/">
          <FiLogOut className="headerIcon"></FiLogOut>
        </a>
      </div>
    </header>
  );
}
