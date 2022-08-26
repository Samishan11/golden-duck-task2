import React from "react";
import Style from "../public/static/capabilities.module.css";

function Capabilities() {
  return (
    <div className={Style.container}>
      <div className={Style.leftContainer}>
        <p>Capabilities</p>
        <h2>We Provide Services that Defy Your Expectations</h2>

        <div className={Style.listContainer}>
          <ul>
            <li>Accountability and Trust</li>
            <li>Communication</li>
            <li>Confident Team</li>
            <li>Customer Statisfaction</li>
            <li>Work Productivity</li>
            <li>Every Detail Matters</li>
          </ul>
        </div>
      </div>
      <div className={Style.rightContainer}>
        <p>Our company values</p>
        <h2>Our Solution Changes Your Life</h2>
        <div className={Style.analytics}>
          <ul>
            <li>
              <h4>Digital Marketing</h4>
              <div className={Style.row}></div>
            </li>
            <li>
              <h4>Website and Mobile Development</h4>
              <div className={Style.row}></div>
            </li>
            <li>
              <h4>Graphic Design</h4>

              <div className={Style.row}></div>
            </li>
            <li>
              <h4>Social Media Management</h4>
              <div className={Style.row}></div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Capabilities;
