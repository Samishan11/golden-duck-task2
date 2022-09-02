import React from "react";
import Style from '../../public/static/adminSideBar'
function sideBar() {
  return (

    <div className={Style.container}>
      <ul>
        <li>
          <a href="#" data-text="Home">
            dashboard
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
      
      </ul>
    </div>
  );
}

export default sideBar;
