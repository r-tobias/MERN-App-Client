import "./login.css"
import { NavLink } from "react-router-dom"
import { useState, useContext, useRef } from "react"
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch({type: "LOGIN_START"});
    try {
      const res = await axios.post("api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch (error) {
      dispatch({type: "LOGIN_FAILURE"});
    }
  };
  // console.log(user)
  // console.log(isFetching)
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="loginInput" placeholder="Enter your username..." ref = {userRef} />
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password..." ref = {passwordRef}/>
            <button className="loginButton" type = "submit" disabled= {isFetching}>Login</button>
        </form>
        <button className="loginRegisterButton">
        <NavLink className = "link" to = {"/register"}>REGISTER</NavLink>
            </button>
            {error && <span style = {{marginTop: "10px"}}>Something went wrong!</span>}

    </div>
  )
}
