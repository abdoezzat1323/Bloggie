import "./write.css";
import TopBar from "../../component/topbar/TopBar";
import WritePostSideBar from "../../component/WritePostSideBar/WritePostSideBar";
import React, { useRef, useState } from "react";
import JoditEditor from "../../component/textEditor/TextEditor";
import { createPost } from "../../services/postService";
import { useNavigate, Navigate } from "react-router-dom";

export default function Write() {
  const [postContent, setPostContent] = React.useState();
  const navigate = useNavigate();

  const post_title = useRef(null);
  const post_description = useRef(null);

  const [postResult, setPostResult] = useState(null);
  const [body, setBody] = useState({});
  const [featuredImage, setFeaturedImage] = useState(null);
  const [categories, setCategories] = useState({});

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const submit = async (res) => {
    let a = await createPost(
      post_title.current.value,
      body.content,
      categories,
      featuredImage
    );
    if (a) {
      navigate("/post/" + a.data.data.id);
    }
  };

  const clearPostOutput = () => {
    setPostResult(null);
  };

  return (
    <>
      <TopBar />
      <div className="writeWare">
        <WritePostSideBar
          setCategories={setCategories}
          setFeaturedImage={setFeaturedImage}
          submit={submit}
        />
        <div className="writecontent">
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
