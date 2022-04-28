import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom"
import "./singlePost.css"
import axios from "axios";
import { Context } from "../../context/Context";


export default function SinglePost() {
    const location = useLocation();
    // console.log(location)
    // console.log(location.pathname.split("/")[2])
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    const handleDelete = async () => {
        try {
            await axios.delete("/posts/" + path, {
                data: { username: user.username }
            });
            window.location.replace("/");
            
        } catch (error) {
        }
    }
    const handleUpdate = async () => {
        try {
            await axios.put("/posts/" + path, {
               username: user.username, title, desc 
            });
            window.location.reload();
            // setUpdateMode(false);
            
        } catch (error) {
        }
    }

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/posts/${path}`);
            // console.log(res)
            setPost(res.data)
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();

    },[path])

  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            {updateMode ? <input type = "text" value = {title} className = "singlePostTitleInput" onChange={(e) => setTitle(e.target.value)} /> : (
            <h1 className="singlePostTitle" >{title}
            {/* render only if the post belongs to the user*/}
            {post.username === user.username && (
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                </div>
            )}
            </h1>
            )}
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: 
                    <NavLink className = "link" to ={`/?user=${post.username}`}>
                    <b>{post.username}</b>
                    </NavLink>
                    </span>
                <span className="singlePostDate">
                    {new Date(post.createdAt).toDateString()}
                    </span>
            </div>
            {updateMode ? <textarea value = {desc} className = "singlePostDescInput" onChange={(e) => setDesc(e.target.value)} /> : (
                <p className="singlePostDesc">{desc}</p>
            )}
            {updateMode && 
            <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            }
        </div>
        
        </div>
  )
}
