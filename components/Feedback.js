import React from "react";
import Style from "../public/static/feedback.module.css";
import { Link } from "react-scroll";

function Feedback() {
  return (
    <div className={Style.container}>
      <div>
        <p>USER FEEDBACK</p>
        <h2>What Our Customer Say About Us</h2>
      </div>
      <div className={Style.feedbackContainer}>
        <div className={Style.feedback}>
          <div className={Style.feedbackImage}>
            <img className="Image" src="assets/images/asset 11.png" />
            <h2>Sushil Kunwar</h2>
            <h4>British Management College</h4>
            <p>
              “Golden Duck has a unique way of proceeding at their business,
              it’s unique and very effective.”
            </p>
          </div>
        </div>
        <div className={Style.feedback}>
          <div className={Style.feedbackImage}>
            <img className="Image" src="assets/images/asset 12.png" />
            <h2>Ashmita Shrestha</h2>
            <h4>Geheni Law Firm</h4>
            <p>
              “I am mesmerized by how easily and seamlessly Golden Duck was able
              to fulfil our Social Medias and website demands. “
            </p>
          </div>
        </div>
        <div className={Style.feedback}>
          <div className={Style.feedbackImage}>
            <img className="Image" src="assets/images/asset 13.png" />
            <h2>Rajan Shrestha</h2>
            <h4>White Horse Recruitment</h4>
            <p>
              “I am extremely delighted to recommend Golden Duck for your
              website and IT needs.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
