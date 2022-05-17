import React, {  useState } from "react";
import './style.css';
import TopBar from "../../component/topbar/TopBar";
import ViewPostSideBar from "../../component/viewpostsidbar/viewsidebar";



  
export default function View_post(){
  const [Comment, setComment] = useState('')
  const handleCommentChange = event=> {
    setComment({Commentval:event.target.value});
    console.log(Comment)
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(Comment)
}
let x ="<div><p>hihihi</p></div>"
  return (
      <>
      <div>
        
        <TopBar/>
      </div>
      <div className="writeWar">
       <ViewPostSideBar/>
     
      <div className="writeontent">
          <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
          <h1></h1>
          <h2 class="post-title-alt"><div dangerouslySetInnerHTML={{__html: x}} /></h2>
          <div>
                <input
                  type="text"
                  name="Comment"
                  onChange={handleCommentChange}
                  style={{
                    marginLeft: "17px",
                    width: "633.4px",
                    borderRadius: "10px",
                    height: "200px",
                    fontSize: "23px",
                    color: "rgb(0,0,0)",
                    paddingLeft: "10px",
                  }}
                  placeholder="Enter The Comment here"
                  required
                />

              <div
                >
                  <button
                    type="button"
                    onClick={submit}
                    style={{
                      background: "#ffffff",
                      height: "60px",
                      marginLeft: "17px",
                      width: "170.025px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      position: "center",
                    }}
                  >
                    Add Comment
                  </button>
                </div>

          </div>
      </div>
      </div>
      </>

    
  )
}