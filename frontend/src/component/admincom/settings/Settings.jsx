import "./settings.css"
import {FaUserCircle} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';
import {MdDone,MdDeleteForever} from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';

export default function Settings() {
  return (
    <div className="settingswar">
      <div className="profileedit">
        <div className="mails">
          <h2>Profile</h2>
          <div className="mailB">
          <label htmlFor="">Email</label>
          <input type="text" />
          <MdDone className="verfiy"/>
          <AiFillDelete className="deletemail"/>
          </div>
          <hr />
          <div className="faceB">
          <label htmlFor="">Facebook</label>
          <input type="text" />
          <MdDone className="verfiy"/>
          <AiFillDelete className="deletemail"/>
          </div>
          
          <hr/>
          <div className="twitB">
          <label htmlFor="">Twitter</label>
          <input type="text" />
          <MdDone className="verfiy"/>
          <AiFillDelete className="deletemail"/>
          </div>
          
        </div>
        <div className="photo">
          <div className="photoshow">
            <FaUserCircle className="photoIcon"/>
            <FaEdit className="editPhoto"/>
          </div>
          
        </div>
      </div>
      <div className="Title">
        {/* <h2>Blog Title</h2> */}
          <div className="titleedit">
              {/* <label htmlFor="">Title</label>
              <input type="text" />
              <MdDone className="verfiy"/>
              <AiFillDelete className="deletemail"/> */}
          </div>
      </div>
    </div>
  )
}