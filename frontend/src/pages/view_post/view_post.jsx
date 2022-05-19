import React, { useState, useEffect } from "react";
import "./style.css";
import TopBar from "../../component/topbar/TopBar";
import ViewPostSideBar from "../../component/viewpostsidbar/viewsidebar";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { getPost } from "../../services/postService";
import config from "../../config.json";

export default function View_post() {
  const { id } = useParams();
  console.log(id);

  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let x = await getPost(id);
      if (!x.featured) x.featured = "/img/placeholder.png";
      else x.featured = BASE_URL + "/" + x.featured;
      setPost(x);
    };
    fetchData().catch(console.error);
  }, []);

  const [Comment, setComment] = useState("");
  const handleCommentChange = (event) => {
    setComment({ Commentval: event.target.value });
    console.log(Comment);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(Comment);
  };
  const BASE_URL = config.BASE_URL;

  let x = `<p style="text-align: center;"><span style="font-size: 36pt;">my name is abdelrhman ezzat that is my name fo r you</span></p>
<p style="text-align: center;"><span style="font-size: 36pt;"><img src="http://127.0.0.1:5000/uploads/file-1652824358819.jpeg" alt="" width="256" height="197"></span></p>`;

  let y = `<p style="text-align: center;"><span style="font-size: 36pt;">my name is abdelrhman eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeezzat that is my name fo r you</span></p>
<p style="text-align: center;"><span style="font-size: 36pt;"><img src="http://127.0.0.1:5000/uploads/file-1652824358819.jpeg" alt="" width="256" height="197"></span></p>`;

  return (
    <>
      <div>
        <TopBar />
      </div>
      <div className="writeWar">
        <ViewPostSideBar />
        <div className="writeontent">
          <div className="imgdiv">
            <img src={post.featured} alt="" className="img" />
          </div>
          <div className="postfield">
            <h2 class="post-titlee-alt">{post.title}</h2>
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
          <div>
            <textarea
              name="Comment"
              onChange={handleCommentChange}
              className="commentfiledinput"
              placeholder="Enter The Comment here"
              required
            />
          </div>
          <div>
            <button type="button" onClick={submit} className="button-55">
              Add Comment
            </button>
          </div>
          <div className="commentfield">
            <h2 class="post-titlee-alt"></h2>
            <div className="text" dangerouslySetInnerHTML={{ __html: y }} />
          </div>
        </div>
      </div>
    </>
  );
}
