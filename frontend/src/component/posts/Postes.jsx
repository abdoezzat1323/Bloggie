import Post from "../post/Post";
import "./postes.css";
import { getPinnedPosts } from "../../services/postService";
import { useEffect, useState } from "react";

export default function Postes() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let x = await getPinnedPosts();
      setPosts(x.data.data);
      x.data.data.map((row, i) => console.log(row));
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="posts">
      {posts.map((p, i) => (
        <Post post={p} />
      ))}
    </div>
  );
}
