import Header from '../../header/Header'
import Postes from '../../posts/Postes'
import Sidebar from '../../sidebar/Sidebar'
import './home.css'
import TopBar from "../../topbar/TopBar";

export default function Home() {
  return (
    <>
    <TopBar/>
    <Header />
    <div className='home'>
      <Postes />
      <Sidebar />   
    </div>
    </>
  )
}
