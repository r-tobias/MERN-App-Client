import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
// import SinglePost from "./components/singlePost/SinglePost";
function App() {
  // const user = false; 
    const {user} = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="api/register" element = {user ? <Home/> : <Register/>}/>
      <Route path="api/login" element = {user ? <Home /> : <Login/>}/>
      <Route path="api/write" element = {user ? <Write/> : <Register/>}/>
      <Route path="api/settings" element = {user ? <Settings /> : <Register/>}/>
      <Route path="api/post/:postId" element = {<Single/>}/>
      </Routes>
    </Router>
  );
}

export default App;
