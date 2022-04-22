import "./admin.css"
import TopBar from "../../component/topbar/TopBar";
import AdminSideBar from "../../component/adminSidebar/AdminSideBar";
import Statistics from "../../component/admincom/statistics/Statistics";
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
                {/* <BrowserRouter>
                    <Routes>
                      <Route path="/sta" element={<Statistics/>} />
                      
                    </Routes>
                </BrowserRouter> */}
                
            </div>
        </div>
    </>
  )
}
