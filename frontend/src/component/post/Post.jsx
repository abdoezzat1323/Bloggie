import "./post.css";
import config from "../../config.json";
import moment from "moment";

const BASE_URL = config.BASE_URL;

export default function Post(props) {
  return (
    <div className="post">
      <img
        src={
          (Boolean(props.post.featured) &&
            BASE_URL + "/" + props.post.featured) ||
          "/img/placeholder.png"
        }
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          {props.post.categories.map((p, i) => (
            <span className="postCat">{p.category}</span>
          ))}
        </div>
        <span className="postTitle">{props.post.title}</span>
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
