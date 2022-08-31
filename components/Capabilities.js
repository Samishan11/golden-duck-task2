import React from "react";
import Style from "../public/static/capabilities.module.css";
import {AiOutlineTeam,AiFillMessage,AiFillLock} from 'react-icons/ai'
import {BsSuitHeartFill} from 'react-icons/bs'
import {MdAccessTimeFilled} from 'react-icons/md'
import {FaBrain} from 'react-icons/fa' 

function Capabilities() {
  return (
    <div className={Style.container}>
      <div className={Style.leftContainer}>
        <p>Capabilities</p>
        <h2>We Provide Services that Defy Your Expectations</h2>

        <div className={Style.listContainer}>
          <ul>
            <li><AiFillLock/> Accountability and Trust</li>
            <li><AiFillMessage/> Communication</li>
            <li><AiOutlineTeam/> Confident Team</li>
            <li><BsSuitHeartFill/> Customer Statisfaction</li>
            <li><MdAccessTimeFilled/> Work Productivity</li>
            <li><FaBrain/> Every Detail Matters</li>
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
              <div className={Style.row}>
              <div className={Style.rowColor1}></div>

              </div>
            </li>
            <li>
              <h4>Website and Mobile Development</h4>
              <div className={Style.row}>
              <div className={Style.rowColor2}></div>

              </div>
            </li>
            <li>
              <h4>Graphic Design</h4>

              <div className={Style.row}>
                <div className={Style.rowColor3}></div>
              </div>
            </li>
            <li>
              <h4>Social Media Management</h4>
              <div className={Style.row}>
              <div className={Style.rowColor4}></div>

              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Capabilities;
