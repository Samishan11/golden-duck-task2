import React from "react";
import Style from "../public/static/success.module.css";
function Succes() {
  return (
    <div className={Style.container}>
      <div className={Style.heading}>
        <p>Grow Bigger</p>
        <div>
          <h2>Your Succes is Our success</h2>
        </div>
      </div>
      <div className={Style.projectCounts}>
        <div className={Style.column}>
          <div className={Style.text1}>
            <p>50+</p>
          </div>
          <div className={Style.text2}>
            <p>Completed Projects</p>
          </div>
        </div>
        <div className={Style.column}>
          <div className={Style.text1}>
            <p>30+</p>
          </div>
          <div className={Style.text2}>
            <p>Happy Client</p>
          </div>
        </div>
        <div className={Style.column}>
          <div className={Style.text1}>
            <p>24/7</p>
          </div>
          <div className={Style.text2}>
            <p>Customer Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Succes;
