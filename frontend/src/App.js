import Login from "./pages/login/Login"
import Register from "./pages/signup/signup"
import Home from "./pages/home/Home";
import Test from "./test/Test.jsx";
import Te from "./component/alert"
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
        <Route path="/Test" element={<Test />} />
        <Route path="/te" element={<Te />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
