import "./write.css";
import TopBar from "../../component/topbar/TopBar";
import Write_PostSideBar from "../../component/write_postSidebar/write_postSideBar"
import React, { useRef, useState } from "react";
import JoditEditor from "../../component/editor/JoditEditor";


export default function Write() {
    
  const [postContent, setPostContent] = React.useState();

  const maxNumber = 69;

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
    <div className="writeWar" >
            <Write_PostSideBar/>
     <div className="writeontent" >
        <JoditEditor  />
      </div> 
    </div> 
  
  </>
  );
}