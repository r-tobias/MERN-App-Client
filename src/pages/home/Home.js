import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  // console.log(location)
  // location.search = {search}

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("api/posts" + search);
      // console.log(res)
      setPosts(res.data)
      // console.log(res.data)
      // http://localhost:3000/?user=test8
    }
    fetchPosts()
  },[search])
  return (
      <>
        <Header/>
    <div className="home">
        <Posts posts = {posts} />
        <Sidebar/>

    </div>
      
      </>
  )
}
