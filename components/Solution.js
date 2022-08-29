import React from "react";
import Style from "../public/static/solutionSection.module.css";

import Link from "next/link";
import { BiCodeAlt, BiMessage } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";


function Solution() {
  return (
    <div className={Style.container}>
      <div className={Style.heading}>
        <p>Solve Problem</p>
        <div>
          <h2>
            Perfect Solution <br /> For Your Buisness
          </h2>
        </div>
      </div>
      <div className={Style.solutions}>
        <div 
          className={Style.solution}>
          <div className={Style.solutionDetails}>
            <div className={Style.icon}>
              <BiCodeAlt />
            </div>
            <div className={Style.solutionDetailsContent}>
              <div className={Style.solutionList}>
              <h4>Web Development</h4>

                <ul>
                  <li><MdOutlineDone/> Responsive Website</li>
                  <li><MdOutlineDone/> Ecommerce Website</li>
                  <li><MdOutlineDone/> Web application</li>
                </ul>
              </div>
            </div>
          </div>
          <Link href='https://it.goldenduck.com.np/website-development-in-nepal/'>All Details</Link>
        </div>
        <div className={Style.solution}>
          <div className={Style.solutionDetails}>
            <div className={Style.icon}>
              <AiOutlineHeart />
            </div>
            <div className={Style.solutionDetailsContent}>
              <div className={Style.solutionList}>
              <h4>Graphic Design</h4>

                <ul>
                  <li><MdOutlineDone/> Logo and Branding Design</li>
                  <li><MdOutlineDone/> Social Media Design</li>
                  <li><MdOutlineDone/> Infographics/Print Design</li>
                </ul>
              </div>
            </div>
          </div>
          <Link href='https://it.goldenduck.com.np/graphic-designer-in-nepal/'>All Details</Link>

        </div>
        <div className={Style.solution}>
          <div className={Style.solutionDetails}>
            <div className={Style.icon}>
              <BiMessage />
            </div>
            <div className={Style.solutionDetailsContent}>
              <div className={Style.solutionList}>
              <h4>Digital Marketing</h4>

                <ul>
                  <li><MdOutlineDone/>   Search Engine Optimization</li>
                  <li><MdOutlineDone/>   Social Media Marketing</li>
                  <li><MdOutlineDone/>   Email Marketing</li>
                </ul>
              </div>
            </div>
          </div>
          <Link href='https://it.goldenduck.com.np/digital-marketing-company-in-nepal/'>All Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Solution;
