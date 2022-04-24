import "./WritePostSideBar.css";
import React, { useState } from "react";
import UploadImage from "../image_upload/ImagUpload";

export default function WritePostSideBar() {
  const sports = [
    "Baseball",
    "Basketball",
    "Cricket",
    "Field Hockey",
    "Football",
    "Table Tennis",
    "Tennis",
    "Volleyball",
  ];

  const [title, setTitle] = useState("");
  const [images, setImages] = React.useState(null);

  return (
    <div className="write_postsidebar ">
      <div>
        {" "}
        <button className="publishButton" type="button">
          Publish
        </button>
      </div>

      <UploadImage title={"Featured Image"} getImage={setImages} />

      <div className="lable1 write_postsidebar">
        <label className="sidebarTitle ">Categories</label>
      </div>
      <button type="button" onClick={() => alert(title)} className="input11">
        Save
      </button>
    </div>
  );
}
