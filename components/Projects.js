import React from "react";
import Style from "../public/static/project.module.css";
import { Link } from "react-scroll";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Style1 from "../public/static/loding.module.css"

function Projects() {
  const [projects, setProjects] = React.useState([]);
  const getProject = async () => {

    const response = await axios.get('https://golden-duck-it.herokuapp.com/api/v4/getProject');
    console.log(response.data.projects)
    setProjects(response.data.projects)
  }

  React.useEffect(() => {
    getProject();
  }, [])
  return (
    <div className={Style.container}>
      <div>
        <p>OUR WORK</p>
        <h2>The quality and style we follow</h2>
      </div>
      <div className={Style.projectContainer}>
        {
          projects.length > 0 ?
            projects.map(data => {
              return (
                <div className={Style.project}>
                  <div className={Style.projectImage}>
                    <img
                      className="Image"
                      src={`https://golden-duck-it.herokuapp.com/${data.image}`}
                    />

                  </div>
                  <p>{data.title}</p>
                  <Link to="https://jacnepal.com.np/">Visit Live Site</Link>
                </div>
              )

            }) :
            <div className={Style1.skeleton}>
              <div className={Style1.skelotonMain}>
                <Skeleton style={{ height: "60%" }} className={Style1.animation}><img src="" alt="" /></Skeleton>
                <Skeleton className={Style1.animation}><p></p></Skeleton>
                <Skeleton className={Style1.animation}><p></p></Skeleton>
                <Skeleton className={Style1.animation}><p></p></Skeleton>
              </div>
              <div className={Style1.skelotonMain}>
                <Skeleton style={{ height: "60%" }} className={Style1.animation}><img src="" alt="" /></Skeleton>
                <Skeleton className={Style1.animation}><p></p></Skeleton>
                <Skeleton className={Style1.animation}><p></p></Skeleton>
                <Skeleton className={Style1.animation}><p></p></Skeleton>
              </div>
              <div className={Style1.skelotonMain}>
                <Skeleton style={{ height: "60%" }} className={Style1.animation}><img src="" alt="" /></Skeleton>
                <Skeleton className={Style1.animation}><p></p></Skeleton>
                <Skeleton className={Style1.animation}><p></p></Skeleton>
                <Skeleton className={Style1.animation}><p></p></Skeleton>
              </div>
            </div>
        }
      </div>
    </div>
  );
}

export default Projects;
