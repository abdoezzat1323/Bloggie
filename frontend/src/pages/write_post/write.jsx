import "./write.css";
import TopBar from "../../component/topbar/TopBar";
import WritePostSideBar from "../../component/WritePostSideBar/WritePostSideBar";
import React, { useRef, useState } from "react";
import JoditEditor from "../../component/editor/TextEditor";
import { createPost } from "../../services/postService";

export default function Write() {
  const [postContent, setPostContent] = React.useState();

  const maxNumber = 69;

  const post_title = useRef(null);
  const post_description = useRef(null);

  const [postResult, setPostResult] = useState(null);
  const [body, setBody] = useState({});
  const [featuredImage, setFeaturedImage] = useState(null);
  const [categories, setCategories] = useState({});

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const submit = (res) => {
    createPost(
      post_title.current.value,
      body.content,
      categories,
      featuredImage
    );
  };

  async function postData() {
    const postData = {
      title: post_title.current.value,
      post: post_description.current.value,
    };
    try {
      const res = await fetch("http://127.0.0.1:5000/api/auth/posts", {
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

  return (
    <>
      <TopBar />
      <div className="writeWar">
        <WritePostSideBar
          setCategories={setCategories}
          setFeaturedImage={setFeaturedImage}
          submit={submit}
        />
        <div className="writeontent">
          <div>
            <input
              ref={post_title}
              className="titlePostCreate"
              placeholder="title..."
            ></input>
          </div>

          <JoditEditor setBody={setBody} />
        </div>
      </div>
    </>
  );
}
