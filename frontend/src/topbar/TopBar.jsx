import "./topbar.css"
import Notifications from "react-notifications-menu";



export default function topBar() {
  const data = [
    {
      image :'https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/6b9.png' ,
      message : 'Lorem ipsum dolor sit amet.',
      detailPage : '/events', 
      receivedTime:'12h ago'
    }
  ]
  return (

    <header>
      <div className="left_section">
        <i className="material-icons logo sizeleft ">menu</i>
        {/* <img className="image1" src="../../img/logo.jpg"  /> */}
        
      </div>
      <div className="center_section">
      <label className="logolable" >Blog</label>
      </div>
      <div className="right_section  sizeright ">
        <Notifications 
            data={data} 
            cardOption={data => console.log(data)}
            viewAllbtn={{ text: 'see all', linkTo: '/seeAll' }}
            markAsRead={data => console.log(data)}
            headerBackgroundColor = 'white'
            header={
              {
                title: 'Notifications',
                option: { text: 'View All', onClick: () => {} }
              }
            }
        />
        <a href="/"><i className="material-icons">account_circle</i></a>
        
      </div>
    </header>

  )
}

