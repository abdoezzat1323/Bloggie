import Login from "./pages/login/Login"
import Register from "./pages/signup/signup"
import Home from "./pages/home/Home";


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import Write from "./pages/write_post/write_post";
import JoditEditor from "./component/editor/JoditEditor";
import Ass from "./pages/test";




function App() {
  const user = false;
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home/> :<Login />} />
        <Route path="/Register" element={ user ? <Home/> :<Register />} />
        {/* <Route path="/Test" element={<Test />} /> */}
        <Route path="/write_post" element={<Write />} />
        <Route path="/write" element={< JoditEditor />} />
        <Route path="/test" element={< Ass />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
