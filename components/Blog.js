import axios from "axios";
import React from "react";
import Style from "../public/static/blog.module.css";
import Link from "next/link";
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
                  <Link href={{
                    pathname: "/blog/Blog",
                    query: {data: JSON.stringify(data)}
                  }}>
                    <div className={Style.blogImage}>
                      <img src={data.image.url} alt='' />
                    </div>
                  </Link>

                  <div className={Style.blogDescription}>
                    <h2>{data.title}</h2>
                    <h5>{data.catagory}</h5>
                    <p>
                      {parse(data.description.slice(0, 300)+"......")}
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
