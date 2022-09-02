import React, { useState } from "react";
import { NextResponse } from "next/server";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import SideBar from "../components/dashboard/SideBar";
import Style from "../public/static/adminSideBar.module.css";
import Feedback from "./dashboard/feedback";
import Blog from "./dashboard/blog";
import DashboardComponent from "../components/dashboard/DashboardComponent";
import Portfolio from "./dashboard/Portfolio"
function dashboard(req) {
  const router = useRouter();

  const logout = () => {
    console.log("logging out");
    Cookies.set("Loggedin", false);
    window.location.replace("http://localhost:3000");
  };

  const [blog, setBlog] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [project, setProject] = useState(false);
  const [portfolio, setPortfolio] = useState(false);

  return (
    <div className={Style.parent}>
      <div className={Style.container}>
        <ul>
          <li>
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
          </li>
          <li>
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
      {blog ? <Blog /> : feedback ? <Feedback /> : portfolio ? <Portfolio/> : <DashboardComponent />}
    </div>
  );
}

export default dashboard;
