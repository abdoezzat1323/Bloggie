import "./WritePostSideBar.css";
import React, { useState, useRef } from "react";
import UploadImage from "../imageUpload/ImageUpload";
import TagSelector from "../tagSelector/TagSelector";
import Tagify from "@yaireo/tagify";
import "@yaireo/tagify/dist/tagify.css";

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

  const tagInput = useRef("");

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
        <label className="sideTitle ">Categories</label>

        <TagSelector />
      </div>
      <button type="button" onClick={() => alert(title)} className="input11">
        Save
      </button>
    </div>
  );
}
