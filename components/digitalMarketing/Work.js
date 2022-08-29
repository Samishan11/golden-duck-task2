import React from 'react'
import Style from '../../public/static/digitalMarketingWork.module.css'

import Link from "next/link";

import { BiCodeAlt, BiMessage ,BiSearchAlt2 ,BiLike , BiEditAlt} from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import {FaFacebookF} from 'react-icons/fa'
import{FiMail} from 'react-icons/fi'
import {ImLink} from 'react-icons/im'
import { MdOutlineDone } from "react-icons/md";

function Work() {
  return (
  <>
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
        <div className={Style.solution}>
          <div className={Style.solutionDetails}>
            <div className={Style.icon}>
              <BiSearchAlt2/>
            </div>
            <div className={Style.solutionDetailsContent}>
              <div className={Style.solutionList}>
              <h4>SEO</h4>

                <ul>
                  <li><MdOutlineDone/> Keyword Ranking</li>
                  <li><MdOutlineDone/> On-Page SEO</li>
                  <li><MdOutlineDone/> Internal Linking</li>
                  <li><MdOutlineDone/> Google analytics and search</li>
                </ul>
              </div>
            </div>
          </div>
          <Link href='https://it.goldenduck.com.np/website-development-in-nepal/'>All Details</Link>
        </div>
        <div className={Style.solution}>
          <div className={Style.solutionDetails}>
            <div className={Style.icon}>
              <BiLike  />
            </div>
            <div className={Style.solutionDetailsContent}>
              <div className={Style.solutionList}>
              <h4>Social Media Management</h4>

                <ul>
                  <li><MdOutlineDone/> Page Creation</li>
                  <li><MdOutlineDone/> Social Media Post Design</li>
                  <li><MdOutlineDone/> Daily/Weekley Content Upload</li>
                  <li><MdOutlineDone/> Page Optimization</li>
                </ul>
              </div>
            </div>
          </div>
          <Link href='https://it.goldenduck.com.np/graphic-designer-in-nepal/'>All Details</Link>

        </div>
        <div className={Style.solution}>
          <div className={Style.solutionDetails}>
            <div className={Style.icon}>
              <FaFacebookF/>
            </div>
            <div className={Style.solutionDetailsContent}>
              <div className={Style.solutionList}>
              <h4>Social Media Boost</h4>

                <ul>
                  <li><MdOutlineDone/>   Ads Campaign</li>
                  <li><MdOutlineDone/>   Custom AD Design</li>
                  <li><MdOutlineDone/>   Detailed Audience Creation</li>
                  <li><MdOutlineDone/>   Dynamic Ads Creation</li>
                </ul>
              </div>
            </div>
          </div>
          <Link href='https://it.goldenduck.com.np/digital-marketing-company-in-nepal/'>All Details</Link>
        </div>
        <div className={Style.solution}>
          <div className={Style.solutionDetails}>
            <div className={Style.icon}>
              <FiMail />
            </div>
            <div className={Style.solutionDetailsContent}>
              <div className={Style.solutionList}>
              <h4>Email Marketing</h4>

                <ul>
                  <li><MdOutlineDone/> Custom Email Design</li>
                  <li><MdOutlineDone/> Schedule & Send Email Blast</li>
                  <li><MdOutlineDone/> CAN-SPAM Act Compliant</li>
                  <li><MdOutlineDone/>Designed to Meet Your Business Needs</li>
                </ul>
              </div>
            </div>
          </div>
          <Link href='https://it.goldenduck.com.np/website-development-in-nepal/'>All Details</Link>
        </div>
        <div className={Style.solution}>
          <div className={Style.solutionDetails}>
            <div className={Style.icon}>
              <BiEditAlt/>
            </div>
            <div className={Style.solutionDetailsContent}>
              <div className={Style.solutionList}>
              <h4>Content Creation and Marketing</h4>

                <ul>
                  <li><MdOutlineDone/> Blog Writing</li>
                  <li><MdOutlineDone/> Video Creation</li>
                  <li><MdOutlineDone/> Social Media Visuals Content </li>
                  <li><MdOutlineDone/> TikTok Creation </li>
                </ul>
              </div>
            </div>
          </div>
          <Link href='https://it.goldenduck.com.np/website-development-in-nepal/'>All Details</Link>
        </div>
        <div className={Style.solution}>
          <div className={Style.solutionDetails}>
            <div className={Style.icon}>
              <ImLink/>
            </div>
            <div className={Style.solutionDetailsContent}>
              <div className={Style.solutionList}>
              <h4>Link Building</h4>

                <ul>
                  <li><MdOutlineDone/> Blog/Guest Blog Writing</li>
                  <li><MdOutlineDone/> Directory Submission </li>
                  <li><MdOutlineDone/> Classified Ads Posting  </li>
                  <li><MdOutlineDone/> High-Quality Press Release Writing</li>
                </ul>
              </div>
            </div>
          </div>
          <Link href='https://it.goldenduck.com.np/website-development-in-nepal/'>All Details</Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default Work