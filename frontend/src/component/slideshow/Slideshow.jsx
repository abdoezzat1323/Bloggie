import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { getPinnedPosts } from "../../services/postService";
import { useEffect, useState } from "react";
import "./slideshow.css";
import config from "../../config.json";
const BASE_URL = config.BASE_URL;

export default function Slideshow() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let x = await getPinnedPosts();
      setPosts(x.data.data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="slider_div ">
      <AwesomeSlider className="silder_mod">
        {posts.map((post, i) => (
          <div>
            <div
              className="slider_item"
              style={{
                backgroundImage:
                  (Boolean(post.featured) &&
                    "url(" +
                      BASE_URL +
                      "/" +
                      post.featured.replace("\\", "/") +
                      ")") ||
                  `url(https://i.postimg.cc/T3B3WFcv/2.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "100% 120%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className="slider_p">{post.title}</p>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
}
