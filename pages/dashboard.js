import React, { useEffect, useState } from "react";
import { NextResponse } from "next/server";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import SideBar from "../components/dashboard/SideBar";
import Style from "../public/static/adminSideBar.module.css";
import Feedback from "./dashboard/Feedback";
import Blog from "./dashboard/blog";
import DashboardComponent from "../components/dashboard/DashboardComponent";
import Portfolio from "./dashboard/Portfolio"
import Project from "./dashboard/Project";
import { BsFillBarChartFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { SiBloglovin } from 'react-icons/si';
import { AiFillProject } from 'react-icons/ai';
import { MdFeedback } from 'react-icons/md';
import { FcPortraitMode } from 'react-icons/fc';
import { BiLogOut } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';


function dashboard() {
  const router = useRouter();

  const logout = () => {
    console.log("logging out");
    Cookies.set("Loggedin", false);
    window.location.replace("https://golden-duck-it.herokuapp.com/");
  };

  const [blog, setBlog] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [project, setProject] = useState(false);
  const [portfolio, setPortfolio] = useState(false);

  const [show, setShow] = useState(false);;

  const hamToggle = () => {
    show ? setShow(false) : setShow(true)
  }

  return (
    <div className={Style.parent}>
      <div className={show ? Style.sidebarWidthdec : Style.container}>
        <ul>
          <li className={Style.liFirst}>
            <AiFillHome onClick={() => {
                setDashboard(true);
                setBlog(false);
                setProject(false);
                setFeedback(false);
                setPortfolio(false);
              }} className={show ? Style.iconsShow && Style.iheight : Style.icons}></AiFillHome>
            <a className={show ? Style.icons : Style.iconsShow}
              data-text="Home"
              onClick={() => {
                setDashboard(true);
                setBlog(false);
                setProject(false);
                setFeedback(false);
                setPortfolio(false);
              }}
            >

              <p className={show ? Style.icons : Style.iconsShow}>Dashboard</p>
            </a>
            <BsFillBarChartFill className={Style.hamburger} onClick={hamToggle}> </BsFillBarChartFill>
          </li>
          <li className={Style.liFirst}>
            <SiBloglovin   onClick={() => {
                setDashboard(false);
                setBlog(true);
                setProject(false);
                setFeedback(false);
                setPortfolio(false);
              }} className={show ? Style.iconsShow && Style.iheight : Style.icons}></SiBloglovin>
            <a

              data-text="About"
              onClick={() => {
                setDashboard(false);
                setBlog(true);
                setProject(false);
                setFeedback(false);
                setPortfolio(false);
              }}
            >
              <p className={show ? Style.icons : Style.iconsShow}>Blogs</p>
            </a>
          </li>
          <li className={Style.liFirst}>
            <AiFillProject onClick={() => {
                setDashboard(false);
                setBlog(false);
                setProject(true);
                setFeedback(false);
                setPortfolio(false);
              }} className={show ? Style.iconsShow && Style.iheight : Style.icons}></AiFillProject>
            <a
              className={show ? Style.icons : Style.iconsShow}
              data-text="Services"
              onClick={() => {
                setDashboard(false);
                setBlog(false);
                setProject(true);
                setFeedback(false);
                setPortfolio(false);
              }}
            >
              <p className={show ? Style.icons : Style.iconsShow}>Projects</p>
            </a>
          </li>
          <li className={Style.liFirst}>
            <MdFeedback  onClick={() => {
                setDashboard(false);
                setBlog(false);
                setProject(false);
                setFeedback(true);
                setPortfolio(false);
              }} className={show ? Style.iconsShow && Style.iheight : Style.icons}></MdFeedback>
            <a

              data-text="Work"
              onClick={() => {
                setDashboard(false);
                setBlog(false);
                setProject(false);
                setFeedback(true);
                setPortfolio(false);
              }}
            >
              <p className={show ? Style.icons : Style.iconsShow}>Feedbacks</p>

            </a>
          </li>
          <li className={Style.liFirst}>
            <FcPortraitMode  onClick={() => {
                setDashboard(false);
                setBlog(false);
                setProject(false);
                setFeedback(false);
                setPortfolio(true);
              }} className={show ? Style.iconsShow && Style.iheight : Style.icons}></FcPortraitMode>
            <a data-text="Team"

              onClick={() => {
                setDashboard(false);
                setBlog(false);
                setProject(false);
                setFeedback(false);
                setPortfolio(true);
              }}
            >
              <p className={show ? Style.icons : Style.iconsShow}>Portfolio</p>
            </a>
          </li>
          <li className={Style.liFirst}>
            <BiLogOut style={{marginTop:"50px"}} className={show ? Style.iconsShow : Style.icons} onClick={logout}></BiLogOut>
            <button style={{background:"transparent", borderRadius:"10px", padding:"5px 15px" , border:"2px solid #fff", color:"#fff"}} className={show ? Style.icons : Style.iconsShow} onClick={logout}>Login</button>
          </li>
        </ul>
      </div>
      {blog ? <Blog /> : feedback ? <Feedback /> : portfolio ? <Portfolio /> : project ? <Project /> : <DashboardComponent />}
    </div>
  );
}

export default dashboard;
