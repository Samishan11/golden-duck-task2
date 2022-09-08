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

  const hamToggle = () =>{
    setShow(true)
  }

  return (
    <div className={Style.parent}>
      <div className={Style.container}>
        <ul>
          <li>
          <AiFillHome className={show ? Style.iconsShow : Style.icons}></AiFillHome>
            <a
              data-text="Home"
              onClick={() => {
                setDashboard(true);
                setBlog(false);
                setProject(false);
                setFeedback(false);
                setPortfolio(false);
              }}
            >
              Dashboard
            </a>
            <BsFillBarChartFill className={Style.hamburger} onClick={hamToggle}> </BsFillBarChartFill>
          </li>
          <li>
            <SiBloglovin className={show ? Style.iconsShow : Style.icons}></SiBloglovin>
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
              Blogs
            </a>
          </li>
          <li>
            <AiFillProject className={show ? Style.iconsShow : Style.icons}></AiFillProject>
            <a
              data-text="Services"
              onClick={() => {
                setDashboard(false);
                setBlog(false);
                setProject(true);
                setFeedback(false);
                setPortfolio(false);
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <MdFeedback cclassName={show ? Style.iconsShow : Style.icons}></MdFeedback>
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
              Feedbacks
            </a>
          </li>
          <li>
            <FcPortraitMode className={show ? Style.iconsShow : Style.icons}></FcPortraitMode>
            <a data-text="Team"
              onClick={() => {
                setDashboard(false);
                setBlog(false);
                setProject(false);
                setFeedback(false);
                setPortfolio(true);
              }}
            >
              Portfolio
            </a>
          </li>
          <li>
            <button onClick={logout}>LogOut</button>
          </li>
        </ul>
      </div>
      {blog ? <Blog /> : feedback ? <Feedback /> : portfolio ? <Portfolio/>  : project ? <Project/> :<DashboardComponent />}
    </div>
  );
}

export default dashboard;
