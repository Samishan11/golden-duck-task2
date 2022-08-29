import React from "react";
import Link from "next/link";
import Style from "../public/static/workflow.module.css";
import { BsArrowRight } from "react-icons/bs";

const Workflow = () => {
  return (
    <div className={Style.container}>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontWeight: "bold" }}>Our Style</p>
        <div>
          <h2 style={{ color: "#000" }}>Mainstream Work Flow Process</h2>
        </div>
      </div>
      {/* <div className={Style.steps}>
                <div className={Style.step}>
                    <div className="text">
                        <h1 className={Style.steptext}>1</h1>
                        <h3 style={{ fontSize: "14px" }}>Research</h3>
                        <p style={{ fontSize: "14px" }}>This is the first step of the development process.</p>
                    </div>
                </div>
                <div className={Style.step}>
                    <div className="text">
                        <h1 className={Style.steptext}>2</h1>
                        <h3 style={{ fontSize: "14px" }}>Research</h3>
                        <p style={{ fontSize: "14px" }}>This is the first step of the development process.</p>
                    </div>
                </div>
                <div className={Style.step}>
                    <div className="text">
                        <h1 className={Style.steptext}>3</h1>
                        <h3 style={{ fontSize: "14px" }}>Development</h3>
                        <p style={{ fontSize: "14px" }}>This is the third step of the development process.</p>
                    </div>
                </div>
                <div className={Style.step}>
                    <div className="text">
                        <h1 className={Style.steptext}>4</h1>
                        <h3 style={{ fontSize: "14px" }}>Deliver</h3>
                        <p style={{ fontSize: "14px" }}>This is the last step of the development process.</p>
                    </div>
                </div>
            </div> */}
      <div className={Style.Flow}>
        <div className={Style.workflow}>
          <div className={Style.work}>
            <div className={Style.step1}>
              <div className={Style.text}>
                <h1 className={Style.steptext}>1</h1>
                <h3 style={{ fontSize: "12px" }}>Research</h3>
                <p style={{ fontSize: "10px" }}>
                  This is the first step of the development process.
                </p>
              </div>
            </div>
            <img
              className={Style.arrowimg1}
              src="/assets/images/arrow.png"
              width={200}
              alt="arrow logo"
            />
          </div>
          <div className={Style.work}>
            <div className={Style.step1}>
              <div className={Style.text}>
                <h1 className={Style.steptext}>2</h1>
                <h3 style={{ fontSize: "12px" }}>Research</h3>
                <p style={{ fontSize: "10px" }}>
                  This is the first step of the development process.
                </p>
              </div>
            </div>
            <img
              className={Style.arrowimg2}
              src="/assets/images/arrow.png"
              width={200}
              alt="arrow logo"
            />
          </div>
          <div className={Style.work}>
            <div className={Style.step1}>
              <div className={Style.text}>
                <h1 className={Style.steptext}>3</h1>
                <h3 style={{ fontSize: "12px" }}>Research</h3>
                <p style={{ fontSize: "10px" }}>
                  This is the first step of the development process.
                </p>
              </div>
            </div>
            <img
              className={Style.arrowimg3}
              src="/assets/images/arrow.png"
              width={200}
              alt="arrow logo"
            />
          </div>
          <div className={Style.work}>
            <div className={Style.step1}>
              <div className={Style.text}>
                <h1 className={Style.steptext}>4</h1>
                <h3 style={{ fontSize: "12px" }}>Research</h3>
                <p style={{ fontSize: "10px" }}>
                  This is the first step of the development process.
                </p>
              </div>
            </div>
            <img
              className={Style.arrowimg4}
              src="/assets/images/arrow.png"
              width={200}
              alt="arrow logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
