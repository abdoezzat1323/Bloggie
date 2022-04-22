import "./adminsidebar.css"
import {ImStatsDots} from 'react-icons/im';
import {FaPaintBrush,FaRegShareSquare} from 'react-icons/fa';
import {BiPaintRoll,BiCommentDetail} from 'react-icons/bi';
import {BsFiles} from 'react-icons/bs';
import {MdSettings} from 'react-icons/md';
import {FiLink} from 'react-icons/fi';
import {
    NavLink,useNavigate} from 'react-router-dom';



export default function AdminSideBar() {
    const navigate =useNavigate()
  return (
    <div className="adminsidebar">
        
        <ul>
            <li className="ASideItem">
                <NavLink to="/admin/shares">
                <FaRegShareSquare className="ADIcon"/>Shares
                </NavLink>
            </li>
            <li className="ASideItem">
                <NavLink to="/admin/statistics">
                <ImStatsDots className="ADIcon"/>Statistcs
                </NavLink>
            </li>
            <li className="ASideItem">
                <NavLink to="/admin/comments">
                <BiCommentDetail className="ADIcon"/>Comments
                </NavLink>
            </li>
            <li className="ASideItem">
                <NavLink to="/admin/pages">
                <BsFiles className="ADIcon"/>Pages
                </NavLink>
            </li>
            <li className="ASideItem">
                <NavLink to="/admin/format">
                <BiPaintRoll className="ADIcon"/>Format
                </NavLink>
            </li>
            <li className="ASideItem">
                <NavLink to="/admin/theme">
                <FaPaintBrush className="ADIcon"/>Theme
                </NavLink>
            </li>
            <li className="ASideItem">
                <NavLink to="/admin/settings">
                <MdSettings className="ADIcon"/>Settings
                </NavLink>
            </li>            
            <li onClick={()=>navigate('/')} className=" goblog">
                <FiLink className="ADIcon"/>Go To Blog
            </li>            
        </ul>
        
    </div>
  )
}
