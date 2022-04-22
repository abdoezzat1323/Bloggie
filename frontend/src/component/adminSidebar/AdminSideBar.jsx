import "./adminsidebar.css"
import {ImStatsDots} from 'react-icons/im';
import {FaPaintBrush,FaRegShareSquare} from 'react-icons/fa';
import {BiPaintRoll,BiCommentDetail} from 'react-icons/bi';
import {BsFiles} from 'react-icons/bs';
import {MdSettings} from 'react-icons/md';
import {FiLink} from 'react-icons/fi';




export default function AdminSideBar() {
  return (
    <div className="adminsidebar">
        
        <ul>
            <li className="ASideItem">
                <FaRegShareSquare className="ADIcon"/>Shares
            </li>
            <li className="ASideItem">
                <ImStatsDots className="ADIcon"/>Statistcs
            </li>
            <li className="ASideItem">
                <BiCommentDetail className="ADIcon"/>Comments
            </li>
            <li className="ASideItem">
                <BsFiles className="ADIcon"/>Pages
            </li>
            <li className="ASideItem">
                <BiPaintRoll className="ADIcon"/>Format
            </li>
            <li className="ASideItem">
                <FaPaintBrush className="ADIcon"/>Theme
            </li>
            <li className="ASideItem">
                <MdSettings className="ADIcon"/>Settings
            </li>            
            <li className=" goblog">
                <FiLink className="ADIcon"/>Go To Blog
            </li>            
        </ul>
        
    </div>
  )
}
