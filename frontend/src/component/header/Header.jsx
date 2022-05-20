import "./header.css";
import { getTitle } from "../../services/blogServices";
import Slideshow from "../../component/slideshow/Slideshow";
import { getTokenCookie } from "../../services/helperService";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleLg">{getTitle()}</span> */}
      </div>
      <img className="headerImg" src="/img/bg.jpg" alt="" />
      {getTokenCookie() && <Slideshow />}
    </div>
  );
}
