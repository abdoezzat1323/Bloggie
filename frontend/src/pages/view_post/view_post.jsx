import React, { useState, useEffect } from "react";
import "./style.css";
import TopBar from "../../component/topbar/TopBar";
import ViewPostSideBar from "../../component/viewpostsidbar/viewsidebar";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { getPost } from "../../services/postService";
import { isLoggedIn } from "../../services/authService";
import config from "../../config.json";
import moment from "moment";
import { useNavigate, Navigate } from "react-router-dom";

export default function View_post() {
  const { id } = useParams();
  const navigate = useNavigate();

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
  const [comments, setComments] = useState([]);
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    setComments([...comments, Comment]);
  };
  const BASE_URL = config.BASE_URL;

  return !isLoggedIn() ? (
    <Navigate to="/" />
  ) : (
    <>
      <div>
        <TopBar />
      </div>
      <div className="writeWar1">
        <ViewPostSideBar />
        <div className="writeontent1">
          <div className="imgdiv1">
            <img src={post.featured} alt="" className="img1" />
          </div>
          <div className="postfield1">
            <h2 class="post-titlee-alt1">{post.title}</h2>
            <center>
              <span className="postDate">
                {moment(post.createdAt).format("YYYY-MM-DD")}
              </span>{" "}
            </center>

            <div
              className="text1"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
          {comments.map((p, i) => (
            <div className="commentfield1">
              <h2 class="comment-titlee-alt1"></h2>
              <div className="textcomment1">
                <p>{p}</p>
              </div>
            </div>
          ))}
          <div>
            <textarea
              name="Comment1"
              onChange={handleCommentChange}
              className="commentfiledinput1"
              placeholder="Enter The Comment here"
              required
            />
          </div>
          <div>
            <button type="button1" onClick={submit} className="button-551">
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
