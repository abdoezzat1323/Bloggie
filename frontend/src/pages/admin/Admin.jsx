import "./admin.css"
import TopBar from "../../component/topbar/TopBar";
import AdminSideBar from "../../component/adminSidebar/AdminSideBar";
import Statistics from "../../component/admincom/statistics/Statistics";
import Shares from "../../component/admincom/shares/Shares";
import Comments from "../../component/admincom/comments/Comments";
import Settings from "../../component/admincom/settings/Settings";
import Format from "../../component/admincom/format/Format";
import Theme from "../../component/admincom/theme/Theme";
import Pages from "../../component/admincom/pages/Pages";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import Card from "../../component/admincom/card/Card";



export default function Admin() {
  let users=['ahmed','mohamed','samy','miche','tom' ,'redsa','affeds','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','tam']
  let posts=['ahmed','mohamed','samy','miche','tom' ,'redsa','affeds','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','gleol','tam']
  let cards=[
    {
      title:"Number of signed up",
      value:2387
    },
    {
      title:"number of posts",
      value:1468
    },
    {
      title:"most reacted value",
      value:"my trip"
    },
    {
      title:"number of reaches",
      value:8465
    }
  ]

  return (
    <>
        {/* <TopBar/> */}
        <div className="adminWar" >
          <div className="admincontent">
            <div className="left">
              <div className="cards">
                <Card 
                color={"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)"}
                data={cards[0]}
                /> 
                <Card
                 color={"linear-gradient(180deg, #FF919D 0%, #FC929D 100%)"}
                 data={cards[1]}  
                 /> 
                <Card
                color={"linear-gradient(rgb(255, 202, 113)0%,  rgb(242, 177, 65)100% "}
                data={cards[2]}
                /> 
                <Card
                color={"linear-gradient(180deg, #FF919D 0%, #FC929D 100%)"}
                data={cards[3]}
                /> 
              </div> 
              <div className="table">
                <h2>{'users'}</h2>
                <div className="userlist">
                  {users.map((user) =>(
                      <div className="user-preview" key={users.indexOf(user)}>
                          
                          {/* <h2>{'users'}</h2> */}
                          <p> {user}</p>
                          <p>mymail@gmail.com</p>
                          <div className="buttons">
                            <button className="mailB">mail</button>
                            <button className="deleteB">remove</button>
                          </div>
                                  
                      </div>
                  ))}
                </div>
              </div> 
            </div>
             <div className="right">
               <div className="top">
                 <h2>posts</h2>
                 <button className="mailB">create</button>
               </div>
               <div className="posts">
                <div className="postslist">
                    {posts.map((post) =>(
                        <div className="post-preview" key={posts.indexOf(post)}>
                            
                            {/* <h2>{'users'}</h2> */}
                            <p> {post}</p>
                            
                            <div className="buttons">
                              <button className="mailB">edit</button>
                              <button className="deleteB">delete</button>
                            </div>
                                    
                        </div>
                    ))}
                </div>
               </div>
             </div>   
        </div>
      </div>
    </>
  )
}
