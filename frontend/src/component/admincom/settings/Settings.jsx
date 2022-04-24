import "./settings.css"

export default function Settings() {
  return (
    <div className="settingswar">
      <div className="profileedit">
        <div className="mails">
          <h2>Profile</h2>
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Facebook</label>
          <input type="text" />
          <label htmlFor="">Twitter</label>
          <input type="text" />
        </div>
        <div className="photo">photo</div>
      </div>
    </div>
  )
}
