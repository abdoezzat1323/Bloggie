import "./ImageUpload.css";
import React, { useRef, useState } from "react";
import { uploadImage } from "../../services/uploadService";
import { FaUpload } from "react-icons/fa";

export default function UploadImage(props) {
  const [img, setImg] = useState();

  const image = useRef();

  const onChange = (event) => {
    const [file] = event.target.files;
    setImg(URL.createObjectURL(file));
    props.setFeaturedImage(file);
    uploadImage(file);
  };

  const reset = (event) => {
    setImg(null);
    image.current.value = null;
    props.setFeaturedImage(null);
  };

  return (
    <div className="inputDiv">
      <div>
        <h1 className="sideTitle">{props.title}</h1>
        <input
          className="inputImage"
          onChange={onChange}
          ref={image}
          type="file"
          name="filename"
          hidden
        ></input>
        {(!img || props.min) && (
          <button
            className="inputImageButton"
            onClick={() => image.current.click()}
          >
            <FaUpload className="upIcon" />
          </button>
        )}
        {img && !props.min && (
          <button className="closeButton" onClick={reset}>
            &#10006;
          </button>
        )}
      </div>
      <div>
        {img && !props.min && <img className="inputimage" src={img} alt="" />}
      </div>
      <div></div>
    </div>
  );
}
