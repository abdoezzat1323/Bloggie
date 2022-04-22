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



export default function Admin() {
  return (
    <>
        <TopBar/>
        <div className="adminWar" >
            <AdminSideBar/>
            <div className="admincontent">
                
              <Routes>
                  <Route path="statistics" element={<Statistics/>} />                      
                  <Route path="shares" element={<Shares/>} />                      
                  <Route path="comments" element={<Comments/>} />                      
                  <Route path="settings" element={<Settings/>} />                      
                  <Route path="format" element={<Format/>} />                      
                  <Route path="theme" element={<Theme/>} />                      
                  <Route path="pages" element={<Pages/>} />                      
                                        
              </Routes>
                
                
            </div>
        </div>
    </>
  )
}
