import React from 'react';
import Comments from "../../component/Comments/Comments";
import "./Comments.css";
function commentSection() {
  return (
    
    <div className='Comments'>
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

export default commentSection;

