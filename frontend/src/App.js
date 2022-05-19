import Login from "./pages/login/Login";
import Register from "./pages/signup/signup";
import Home from "./pages/home2/Home";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Write from "./pages/write/Write";
import Writen from "./pages/test";
import Admin from "./pages/admin/Admin";
import Grid from "./component/grid/Grid";
import Comments from "./pages/Comments/Comments";
import View_post from "./pages/view_post/view_post";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/login" element={user ? <Home /> : <Login />} />{" "}
        <Route path="/Register" element={user ? <Home /> : <Register />} />{" "}
        <Route path="/grid" element={<Grid />} />{" "}
        <Route path="/write" element={<Write />} />{" "}
        <Route path="/admin/*" element={<Admin />} />{" "}
        <Route path="/Comments" element={<Comments />} />{" "}
        <Route path="/View_post" element={<View_post />} />{" "}
        <Route  path="/post/:id" element={<View_post />} />{" "}

        {/* <Route path="/write" element={< JoditEditor />} /> */}{" "}
        {/* <Route path="/test" element={< Admin1 />} />{" "} */}
      </Routes>{" "}
    </BrowserRouter>
  );
}
export default App;
