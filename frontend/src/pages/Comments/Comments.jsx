import React from 'react';
import TopBar from "../../component/topbar/TopBar";
import Comments from "../../component/Comments/Comments";
import "./Comments.css";
function commentSection() {
  return (
    
    <div className='Comments'>
      <TopBar/>
      <div>
      <h1>commentSection</h1>
      <Comments
        commentsUrl="http://localhost:3000/comments"
        currentUserId="1"
      />
    </div>

    </div>
  );
}

export default Comments;

