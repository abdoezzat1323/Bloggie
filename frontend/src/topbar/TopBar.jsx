import "./topbar.css"

export default function topBar() {
  return (
    <header>
    <div className="left_section">
      <i className="material-icons logo  ">menu</i>
      {/* <img className="image1" src="../../img/logo.jpg"  /> */}
      
    </div>
    <div className="center_section">
    <label className="logolable" >Blog</label>
    </div>
  
    <div className="right_section">
      <a href><i className="material-icons  "  >notifications</i></a>
      <a href><i className="material-icons">account_circle</i></a>
      
    </div>
  </header>
  )
}

