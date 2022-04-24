import "./write_postsidebar.css"
import {ImStatsDots} from 'react-icons/im';
import {FaPaintBrush,FaRegShareSquare} from 'react-icons/fa';
import {BiPaintRoll,BiCommentDetail} from 'react-icons/bi';
import {BsFiles} from 'react-icons/bs';
import {MdSettings} from 'react-icons/md';
import {FiLink} from 'react-icons/fi';




export default function Write_PostSideBar() {
  return (
    <div className="write_postsidebar">
        
        <ul>
            <li className="WSideItem">
                <FaRegShareSquare className="ADIcon"/>Shares
            </li>
            <li className="WSideItem">
                <ImStatsDots className="WRIcon"/>Statistcs
            </li>
            <li className="WSideItem">
                <BiCommentDetail className="WRIcon"/>Comments
            </li>
            <li className="WSideItem">
                <BsFiles className="WRIcon"/>Pages
            </li>
            <li className="WSideItem">
                <BiPaintRoll className="WRIcon"/>Format
            </li>
            <li className="WSideItem">
                <FaPaintBrush className="WRIcon"/>Theme
            </li>
            <li className="WSideItem">
                <MdSettings className="WRIcon"/>Settings
            </li>            
            <li className=" Goblog">
                <FiLink className="WRIcon"/>Go To Blog
            </li>            
        </ul>
        
    </div>
  )
}
