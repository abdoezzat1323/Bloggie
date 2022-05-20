import "./post.css";
import config from "../../config.json";
import moment from "moment";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

const BASE_URL = config.BASE_URL;

export default function Post(props) {

  return (
    <div className="post">
      <a href={`post/${props.post.id}`}><img 
        src={
          (Boolean(props.post.featured) &&
            BASE_URL + "/" + props.post.featured) ||
          "/img/placeholder.png"
        }
        alt=""
        className="postImg"
      />
      </a>
      <div className="postInfo">
        <div className="postCats">
          {props.post.categories.map((p, i) => (
            <span className="postCat">{p.category}</span>
          ))}
        </div>
        <a href={`post/${props.post.id}`} className="postTitle" >{props.post.title}
        </a>
        <hr />
        <span className="postDate">
          {moment(props.post.createdAt).format("YYYY-MM-DD")}
        </span>
      </div>
      <p className="postDesc">
        {props.post.body.replace(/<[^>]+>/g, "").replace(/.&nbsp;/g, "")}
      </p>
    </div>
  );
}
