import axios from "axios";
import React from "react";
import Style from "../public/static/blog.module.css";
const parse = require('html-react-parser');

function Blog() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("https://golden-duck-it.herokuapp.com/api/v4/blog")
        setBlogs(res.data.data)
        console.log(res.data.data)

      } catch (error) {
        console.log(error)
      }
    }
    getBlogs()
  }, [])

  return (
    <div className={Style.container}>
      <div className={Style.heading}>
        <p>Recent Blogs</p>
        <h4>
          Stay Up To Date
          <br />
          With Our Blog
        </h4>
        <div className={Style.blogContainer}>
          {
            blogs.map((data) => {
              return (
                <div className={Style.blog}>
                  <a href="https://it.goldenduck.com.np/ecommerce-website-development-in-nepal/">
                    <div className={Style.blogImage}>
                      <img src={`http://localhost:8000/${data.image}`} alt='' />
                    </div>
                  </a>

                  <div className={Style.blogDescription}>
                    <h2>{data.title}</h2>
                    <h5>Website Development</h5>
                    <p>
                      {parse(data.description)}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Blog;
