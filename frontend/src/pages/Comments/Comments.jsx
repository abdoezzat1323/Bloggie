import React from 'react';
import Comments from "../../component/Comments/Comments.jsx";
import "./Comments.css";
function commentSection() {
  return (
    
    <div className='Comments'>
      <div>

      <Comments
        commentsUrl="http://localhost:3000/comments"
        currentUserId="1"
      />
     </div>

    </div>
  );
}

export default commentSection;

