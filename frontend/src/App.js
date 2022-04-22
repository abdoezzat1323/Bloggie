import Login from "./pages/login/Login"
import Register from "./pages/signup/signup"
import Home from "./pages/home/Home";
import Test from "./test/Test.jsx";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import Write from "./pages/write_post/write_post";
import Writen from "./pages/test";
import Admin from "./pages/admin/Admin";



function App() {
  const user = false;
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home/> :<Login />} />
        <Route path="/Register" element={ user ? <Home/> :<Register />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/write_post" element={<Write />} />
        <Route path="/write" element={<Writen />} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
