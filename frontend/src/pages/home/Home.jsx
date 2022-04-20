import Header from '../../header/Header'
import Postes from '../../posts/Postes'
import Sidebar from '../../sidebar/Sidebar'
import './home.css'

export default function Home() {
  return (
    <>
    <Header />
    <div className='home'>
      <Postes />
      <Sidebar />   
    </div>
    </>
  )
}
