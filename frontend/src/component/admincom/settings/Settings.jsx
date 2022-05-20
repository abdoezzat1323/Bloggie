import "./settings.css";
import { FaUserCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDone, MdDeleteForever } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Settings() {
  const [value, setValue] = useState("Loading");

  const handleClick = () => {};

  useEffect(() => {
    fetch("http://localhost:8000/admin")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setValue(data.mail);
      });
  }, []);

  return (
    <div className="settingswar">
      <div className="profileedit">
        <div className="photo">
          <div className="photoshow">
            <FaUserCircle className="photoIcon" />
            <FaEdit className="editPhoto" />
          </div>
        </div>
        <div className="mails">
          <h2>Profile</h2>
          <div className="mailB">
            <label htmlFor="">Email</label>
            <input
              placeholder="Enter Your mail"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <MdDone className="verfiy" onClick={handleClick} />
            <AiFillDelete className="deletemail" />
          </div>
          <hr />
          <div className="faceB">
            <label htmlFor="">Facebook</label>
            <input type="text" />
            <MdDone className="verfiy" />
            <AiFillDelete className="deletemail" />
          </div>

          <hr />
          <div className="twitB">
            <label htmlFor="">Twitter</label>
            <input type="text" />
            <MdDone className="verfiy" />
            <AiFillDelete className="deletemail" />
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
  );
}
