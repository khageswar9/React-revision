import "./Sidebar.css";

export const Sidebar = () => {
  return <div className="main">
    <div className="ProfilePic">  
        <img src="https://avatars.githubusercontent.com/u/88511621?v=4" alt="" />
        <h5 className="name">khageswar</h5>
    </div>

    <div className="navbar">
        <ul>
            <li>Dashboard</li>
            <li>Career</li>
            <li>Enquiry</li>
            <li>Blog</li>
            <li>Chat</li>
            <li>Quote Enquiry</li>
        </ul>
    </div>
        
  </div>
}
