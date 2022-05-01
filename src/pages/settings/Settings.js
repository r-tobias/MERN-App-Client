import { useState, useContext } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import { Context } from "../../context/Context"
import "./settings.css"
import axios from "axios"

export default function Settings() {
    // const [file, setFile] = useState(null);
    const { user } = useContext(Context);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const updatedUser = {
        userId: user._id,
        username,
        email, 
        password
      };
    //   if (file) {
    //     const data =new FormData();
    //     const filename = Date.now() + file.name;
    //     data.append("name", filename);
    //     data.append("file", file);
    //     updatedUser.profilePic = filename;
    //     try {
    //       await axios.post("/upload", data);
    //     } catch (err) {}
    //   }
      try {
        await axios.put("api/users/" +user._id, updatedUser);
        setSuccess(true);
      } catch (err) {
          console.log(err)
      }
    };
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
                {/* <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src={user.profilePic} alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id = "fileInput" style={{display: "none"}} onChange={(e) => setFile(e.target.files[0])}/>
                </div> */}
                <label>Username</label>
                <input type="text" placeholder={user.username} onChange = {e => setUsername(e.target.value)}></input>
                <label>Email</label>
                <input type="email" placeholder={user.email} onChange = {e => setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type="password" onChange = {e => setPassword(e.target.value)}></input>
                <button className="settingsSubmit" type = "submit">Update</button>
                {success && <span style={{color: "coral", textAlign : "center", marginTop :"20px"}}>Profile Updated!</span>}
            </form>
        </div>
            <Sidebar />
        </div>
  )
}
