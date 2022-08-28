import React from "react";
import Style from "../public/static/project.module.css";
import {Link} from "react-scroll";

import Image from "next/image";

function Projects() {
  return (
    <div className={Style.container}>
      <div>
        <p>OUR WORK</p>
        <h2>The quality and style we follow</h2>
      </div>
      <div className={Style.projectContainer}>
        <div className={Style.project}>
          <div className={Style.projectImage}>
            <img
            className="Image"
              src="assets/images/asset 8.png"
            />

          </div>
          <p>JAC Motors Website</p>
          <Link to="https://jacnepal.com.np/">Visit Live Site</Link>
        </div>
        <div className={Style.project}>
        <div className={Style.projectImage}>
          <img
              className="Image"
                src="assets/images/asset 9.png"
              />
        </div>
          <p>White Horse Recruitment Pvt. Ltd.</p>
          <Link to="https://jacnepal.com.np/">Visit Live Site</Link>
        </div>
        <div className={Style.project}>
        <div className={Style.projectImage}>
          <img
            className="Image"
              src="assets/images/asset 10.png"
            />
        </div>
          <p>British Management College</p>
          <Link to="https://jacnepal.com.np/">Visit Live Site</Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
