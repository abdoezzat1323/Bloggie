import "./settings.css"
import {FaUserCircle} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';

export default function Settings() {
  return (
    <div className="settingswar">
      <div className="profileedit">
        <div className="mails">
          <h2>Profile</h2>
          <label htmlFor="">Email</label>
          <input type="text" />
          <hr />
          <label htmlFor="">Facebook</label>
          <input type="text" />
          <hr />
          <label htmlFor="">Twitter</label>
          <input type="text" />
        </div>
        <div className="photo">
          <div className="photoshow">
            <FaUserCircle className="photoIcon"/>
            <FaEdit className="hide"/>
          </div>
        </div>
      </div>
    </div>
  )
}
