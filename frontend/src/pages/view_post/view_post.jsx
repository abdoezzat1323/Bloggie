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
let x =`<p style="text-align: center;"><span style="font-size: 36pt;">my name is abdelrhman ezzat that is my name fo r you</span></p>
<p style="text-align: center;"><span style="font-size: 36pt;"><img src="http://127.0.0.1:5000/uploads/file-1652824358819.jpeg" alt="" width="256" height="197"></span></p>`
  
let y = `<p style="text-align: center;"><span style="font-size: 36pt;">my name is abdelrhman eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeezzat that is my name fo r you</span></p>
<p style="text-align: center;"><span style="font-size: 36pt;"><img src="http://127.0.0.1:5000/uploads/file-1652824358819.jpeg" alt="" width="256" height="197"></span></p>`

  return (
       <>
      <div>
        <TopBar/>
      </div>
      <div className="writeWar">
       <ViewPostSideBar/>
        <div className="writeontent">
          <div className="imgdiv"><img src="https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg" alt="" className="img"  /></div>
          <div className="postfield">
          <h2 class="post-title-alt"></h2>
          <div className="text" dangerouslySetInnerHTML={{__html: x}} /> 
          </div>
          <div >
                <textarea
                  name="Comment"
                  onChange={handleCommentChange}
                  className="commentfiledinput"
                  placeholder="Enter The Comment here"
                  required
                />
           </div>     

              <div
                >
                  <button
                    type="button"
                    onClick={submit}
                    className="button-55"
                  >
                    Add Comment
                  </button>
                </div>
                <div className="commentfield">
                  <h2 class="post-title-alt"></h2>
                  <div className="text" dangerouslySetInnerHTML={{__html: y}} /> 
                </div>

          </div>
      </div>
      </>

    
  )
}