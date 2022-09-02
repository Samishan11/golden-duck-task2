import React from "react";
import { NextResponse } from "next/server";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import SideBar from "../components/dashboard/SideBar";
import Style from "../public/static/adminDashboard.module.css";

function dashboard(req) {
  const router = useRouter();

  return (
    <div className={Style.container}>
      <SideBar />
      <div className={Style.dashboard}>
        <div className={Style.dashboardContainer}>
          <div className={Style.dashboardColumn}>
          <div className={Style.text1}><p>5</p></div>
          <div className={Style.text2}><p>Blogs</p></div>
        </div>
        <div className={Style.dashboardColumn}>
          <div className={Style.text1}><p>3</p></div>
          <div className={Style.text2}><p>Feedbacks</p></div>
        </div>
        <div className={Style.dashboardColumn}>
          <div className={Style.text1}><p>8</p></div>
          <div className={Style.text2}><p>Projects</p></div>
        </div>
        <div className={Style.dashboardColumn}>
          <div className={Style.text1}><p>7</p></div>
          <div className={Style.text2}><p>Portfolio</p></div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default dashboard;
