import Login from "./pages/login/Login";
import Register from "./pages/signup/signup";
import Home from "./pages/home2/Home";

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Write from "./pages/write_post/write_post";
import Writen from "./pages/test";
import Admin from "./pages/admin/Admin";
import Grid from "./component/grid/Grid";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/Register" element={user ? <Home /> : <Register />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/write_post" element={<Write />} />
        <Route path="/write" element={<Writen />} />
        <Route path="/admin/*" element={<Admin />} />
        {/* <Route path="/write" element={< JoditEditor />} /> */}
        {/* <Route path="/test" element={< Ass />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
