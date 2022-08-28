import React from "react";
import Style from "../public/static/blog.module.css";
import { Link } from "react-scroll";
function Blog() {
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
          <div className={Style.blog}>
            <a href="https://it.goldenduck.com.np/ecommerce-website-development-in-nepal/">
              <div className={Style.blogImage}>
                <img src="assets/images/asset 14.png" />
              </div>
            </a>

            <div className={Style.blogDescription}>
              <h2>Ecommerce Website Development in Nepal</h2>
              <h5>Website Development</h5>
              <p>
                Are you in search of a Ecommerce website development in Nepal?
                We are second to none in this regard. We make stunning eCommerce
                websites to help business meet their goals. Our Ecommerce...
              </p>
            </div>
          </div>

          <div className={Style.blog}>
            <a href="https://it.goldenduck.com.np/digital-marketing-in-nepal/">
              <div className={Style.blogImage}>
                <img src="assets/images/asset 15.png" />
              </div>
            </a>

            <div className={Style.blogDescription}>
              <h2>
                9 reasons why your business needs Digital Marketing in Nepal
              </h2>
              <h5>Digital Marketing</h5>
              <p>
                I will explain the reasons why your business needs good
                Digital Marketing in Nepal. The role of a good digital marketing
                strategy becomes critical when it comes to scaling up local
                businesses and...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
