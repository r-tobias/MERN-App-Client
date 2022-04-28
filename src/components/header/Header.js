import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Letters to</span>
            <span className="headerTitleLg">Santa</span>
        </div>
        <img 
        className="headerImg" 
        // src = "https://www.wallpapers13.com/wp-content/uploads/2020/12/Christmas-Tree-Red-gold-christmas-background-images-840x525.jpg" 
        // src ="https://media.macphun.com/img/uploads/macphun/blog/1247/christmasphoto.jpg?q=75&w=1710&h=906&resize=cover"
        src ="https://cdn.pixabay.com/photo/2020/12/20/16/53/christmas-5847625_1280.jpg"
        alt = "" />
    </div>
  )
}
