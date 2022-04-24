import Header from '../../component/header/Header'
import Postes from '../../component/posts/Postes'
import Sidebar from '../../component/sidebar/Sidebar'
import './home.css'
import TopBar from "../../component/topbar/TopBar";

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
