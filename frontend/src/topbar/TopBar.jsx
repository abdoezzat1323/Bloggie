import "./topbar.css"

export default function topBar() {
  return (
   
    <div className='top'>
        <div className="topLeft">
        <a href="https://twitter.com/login" ><i className="topIcon fa-brands fa-twitter-square"  ></i></a>
        <a href="https://www.instagram.com/" > <i className="topIcon fa-brands fa-instagram-square"></i></a>
        <a href="https://www.facebook.com/" > <i className="topIcon fa-brands fa-facebook-square"></i></a>
        </div>
        <div className="topCenter">
            <ul className="topList">
               <a href = "/login" style={{textDecoration:"none" , color:"inherit"}}> <li  className="topListItem">HOME</li></a>
               <a href = "/about" style={{textDecoration:"none" , color:"inherit"}}><li className="topListItem">ABOUT</li></a>
               <a href = "/contact" style={{textDecoration:"none" , color:"inherit"}}> <li className="topListItem">CONTACT</li></a>
               <a href = "/write" style={{textDecoration:"none" , color:"inherit"}}> <li className="topListItem">WRITE</li></a>
               <a href = "#" style={{textDecoration:"none" , color:"inherit"}}> <li className="topListItem">LOGOUT</li></a>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImg" src="https://images.unsplash.com/photo-1650355265079-9dad4fa101e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
