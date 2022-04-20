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
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImg" src="https://images.unsplash.com/photo-1650355265079-9dad4fa101e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
