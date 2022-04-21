import "./write.css";
import TopBar from "../../component/topbar/TopBar";
import React, { useRef, useState } from "react";
import ImageUploading from 'react-images-uploading';
import JoditEditor from "../../component/editor/JoditEditor";


export default function Write() {
    
  const [images, setImages] = React.useState([]);
  const [postContent, setPostContent] = React.useState();

  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };


    const post_title = useRef(null);
    const post_description = useRef(null);
    const [postResult, setPostResult] = useState(null);
    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    }
async function postData() {
  console.log(postContent)

    const postData = {
    title: post_title.current.value,
    post: post_description.current.value,
    }
    console.log(postData)
    try {
        const res = await fetch('http://127.0.0.1:5000/api/auth/posts', {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
          },
          body: JSON.stringify(postData),
        });
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
        const data = await res.json();
        const result = {
          status: res.status + "-" + res.statusText,
          headers: {
            "Content-Type": res.headers.get("Content-Type"),
            "Content-Length": res.headers.get("Content-Length"),
          },
          data: data,
          
        };
        setPostResult(fortmatResponse(result));
      } catch (err) {
        setPostResult(err.message);
      }
      
     
    }
    
    const clearPostOutput = () => {
      setPostResult(null);
      
    }


  return (
    <>
    <TopBar/>
    <div className="write">
     <div className="App">
     <ImageUploading
      className= "writeImg"
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
        }) => (
          <div className="upload__image-wrapper">
            <button
            className="button-28"
              onClick={onImageUpload}
            >
              Chose Image
            </button>
            <button className="button-28"  onClick={onImageRemoveAll}>Remove Image</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img className="writeImg" src={image['data_url']} alt=""  />

              </div>
            ))}
          </div>
        )}
        </ImageUploading>
        </div>
        <JoditEditor onChange={setPostContent} />
        <input
            className="writeInput"
            ref={post_title}
            placeholder="write your Title"
            type="text"

            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            ref={post_description}

            autoFocus={true}
          />
        </div>
        <button className="writeSubmit"  onClick={postData} >
          Publish
        </button>
  
  </>
  );
}