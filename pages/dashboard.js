import React, { useState } from "react";
import { NextResponse } from "next/server";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import SideBar from "../components/dashboard/SideBar";
import Style from "../public/static/adminSideBar.module.css";
import Feedback from "./dashboard/feedback";
import Blog from "./dashboard/blog";
import Link from "next/link";
import DashboardComponent from "../components/dashboard/DashboardComponent";

function dashboard(req) {
  const router = useRouter();

  const logout = () => {
    console.log("logging out");
    Cookies.set("Loggedin", false);
    window.location.replace("http://localhost:3000");
  };

  return (
    <div className={Style.parent}>
      <div className={Style.container}>
        <ul>
          <li>
            <Link href="/dashboard" data-text="Home">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/Blog" data-text="About">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/dashboard/project" data-text="Services">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/dashboard/Feedback" data-text="Work">
              Feedbacks
            </Link>
          </li>
          <li>
            <Link href="/dashboard/portfolio" data-text="Team">
              Portfolio
            </Link>
          </li>
          <li>
            <button onClick={logout}>LogOut</button>
          </li>
        </ul>
      </div>

      <DashboardComponent />
    </div>
  );
}

export default dashboard;
