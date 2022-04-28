import "./sidebar.css"


export default function Sidebar() {

  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT SANTA</span>
            <img src = "https://media.istockphoto.com/photos/kind-cheerful-positive-mature-santa-with-white-beard-in-costume-picture-id1049351000?k=20&m=1049351000&s=612x612&w=0&h=4IxftnysY6iKVkhTUW6soBGm45ORP0Xqwpg39YaINLU=" alt = ""/>
            <p>Santa Claus, legendary figure who is the traditional patron of Christmas in the United States and other countries, bringing gifts to children.</p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">Follow Santa</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>

        </div>
       </div>
  )
}
