import "./WritePostSideBar.css";
import React, { useState } from "react";
import UploadImage from "../imageUpload/ImageUpload";
import TagSelector from "../tagSelector/TagSelector";

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
  const [featuredImage, setFeaturedImage] = React.useState(null);

  return (
    <div className="MainWriteSideBar">
      <div className="sideDiv">
        {" "}
        <button className="publishButton" type="button">
          Publish
        </button>
      </div>
      <div className="sideDiv">
        <UploadImage title={"Featured Image"} getImage={setFeaturedImage} />
      </div>

      <div className="sideDiv">
        <label className="sidebarTitle ">Categories</label>
        <TagSelector />
      </div>
      <button type="button" onClick={() => alert(title)} className="input11">
        Save
      </button>
    </div>
  );
}
