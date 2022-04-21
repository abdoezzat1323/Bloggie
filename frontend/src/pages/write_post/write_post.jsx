import "./write.css";
import TopBar from "../../component/topbar/TopBar";
import React, { useRef, useState } from "react";

export default function Write() {

    const post_title = useRef(null);
    const post_description = useRef(null);
    const [postResult, setPostResult] = useState(null);
    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    }
async function postData() {
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
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
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
        <button className="writeSubmit" onClick={postData} >
          Publish
        </button>
    </div>
    </>
  );
}