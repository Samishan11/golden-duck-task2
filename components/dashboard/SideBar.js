import React from "react";
import Style from '../../public/static/adminSideBar.module.css'
function Sidebar() {

  const logout = () =>{
    console.log("logging out")
    Cookies.set("Loggedin",false);
    window.location.replace('http://localhost:3000');
}
  

  return (

    <div className={Style.container}>
      <ul>
        <li>
          <a href="#" data-text="Home">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" data-text="About">
            Blogs
          </a>
        </li>
        <li>
          <a href="#" data-text="Services">
            Projects
          </a>
        </li>
        <li>
          <a href="#" data-text="Work">
            Feedbacks
          </a>
        </li>
        <li>
          <a href="#" data-text="Team">
            Portfolio
          </a>
        </li>
        <li>
      <button onClick={logout}>LogOut</button>
          
        </li>
      
      </ul>

    </div>
  );
}

export default Sidebar;
