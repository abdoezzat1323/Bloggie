import Post from "../post/Post";
import "./postes.css";
import { getPosts } from "../../services/postService";
import { useEffect, useState } from "react";
import Search from "../../component/search/Search";

export default function Postes() {
  const [posts, setPosts] = useState([]);
  const [finalPosts, setFinalPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let x = await getPosts();
      setPosts(x.data.data);
      setFinalPosts(x.data.data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="posts-main-div">
      <div className="search-div">
        <Search
          placeholder="Search for posts..."
          posts={posts}
          setFinalPosts={setFinalPosts}
        />
      </div>
      <div className="posts">
        {finalPosts.map((p, i) => (
          <Post post={p} />
        ))}
        {!finalPosts[0] && (
          <p className="no-posts">
            There is no posts that matches your search!
          </p>
        )}
      </div>
    </div>
  );
}
