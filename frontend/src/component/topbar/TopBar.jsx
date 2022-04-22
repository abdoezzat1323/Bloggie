import "./topbar.css";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { FiLogOut } from "react-icons/fi";
import { BiHomeHeart } from "react-icons/bi";

export default function topBar() {
  return (
    <header>
      <NotificationContainer />
      <div className="left_section sizeleft">
        {/* <a className="headerLabel" href="/">
          <BiHomeHeart className="headerIcon"></BiHomeHeart>
        </a> */}
        {/* <i className="material-icons logo sizeleft ">menu</i> */}
        {/* <img className="image1" src="../../img/logo.jpg"  /> */}
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
