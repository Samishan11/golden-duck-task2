import React from "react";
import Style from "../../public/static/adminSideBar.module.css";
import Link from "next/link";
function Sidebar() {
  const [page, setPage] = useState();

  const logout = () => {
    console.log("logging out");
    Cookies.set("Loggedin", false);
    window.location.replace("http://localhost:3000");
  };

  return (
    <>
      <div className={Style.container} id={page}>
        <ul>
          <li>
            <Link
              href="/dashboard"
              data-text="Home"
              onClick={setPage("dashboard")

            }
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/Blog"
              data-text="About"
              onClick={setPage("about")}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/project"
              data-text="Services"
              onClick={setPage("project")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/Feedback"
              data-text="Work"
              onClick={setPage("feedback")}
            >
              Feedbacks
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/portfolio"
              data-text="Team"
              onClick={setPage("portfolio")}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <button onClick={logout}>LogOut</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
