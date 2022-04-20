import Login from "./login/Login"
import Register from "./signup/signup"
import Home from "./pages/home/Home";
import TopBar from "./topbar/TopBar";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';



function App() {
  const user = false;
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home/> :<Login />} />
        <Route path="/Register" element={ user ? <Home/> :<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
