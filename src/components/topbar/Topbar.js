import "./topbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";
import { NavLink } from "react-router-dom";

export default function Topbar() {
  // const user = false;
  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT"});
  }
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                <NavLink className = "link" to = {"/"}>HOME</NavLink>
                </li>
                <li className="topListItem"><NavLink className = "link" to = {"/write"}>WRITE</NavLink></li>
                <li className="topListItem" onClick={handleLogout}>
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {user ? (
          <NavLink className= "link" to = {"/settings"}>
            <img 
            className="topImg"
            src = "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" alt = "" />

          </NavLink>

          ) : (
            <ul className="topList">
            <li className="topListItem">
              <NavLink className = "link" to = {"/login"}>LOGIN</NavLink>
              </li>
              <li className="topListItem">
            <NavLink className = "link" to = {"/register"}>REGISTER</NavLink>
              </li>
            </ul>
          )}

          {user && 
          <NavLink className= "link" to = {"/settings"}>
            <i className="topSearchIcon fa-solid fa-gear"></i>

          </NavLink>
          }

        </div>
    </div>
  )
}
