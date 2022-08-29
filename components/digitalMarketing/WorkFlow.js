import React from "react";
import Link from "next/link";
import Style from "../../public/static/DigitalMarketingWorkflow.module.css";
import { BsArrowRight } from "react-icons/bs";

const WorkFlow = () => {
  return (
    <div className={Style.container}>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontWeight: "bold" }}>Our Style</p>
        <div>
          <h2 style={{ color: "#000" }}>Our Digital Marketing Offerings </h2>
        </div>
      </div>
      <div className={Style.steps}>
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
                        <h3 style={{ fontSize: "14px" }}>Create</h3>
                        <p style={{ fontSize: "14px" }}>This is the second step of the development process.</p>
                    </div>
                </div>
                <div className={Style.step}>
                    <div className="text">
                        <h1 className={Style.steptext}>3</h1>
                        <h3 style={{ fontSize: "14px" }}>Promote</h3>
                        <p style={{ fontSize: "14px" }}>This is the third step of the development process.</p>
                    </div>
                </div>
                <div className={Style.step}>
                    <div className="text">
                        <h1 className={Style.steptext}>4</h1>
                        <h3 style={{ fontSize: "14px" }}>Analyze</h3>
                        <p style={{ fontSize: "14px" }}>This is the last step of the development process.</p>
                    </div>
                </div>
                <div className={Style.step}>
                    <div className="text">
                        <h1 className={Style.steptext}>5</h1>
                        <h3 style={{ fontSize: "14px" }}>Optimize</h3>
                        <p style={{ fontSize: "14px" }}>This is the last step of the development process.</p>
                    </div>
                </div>
            </div>
      <div className={Style.Flow}>
        <div className={Style.workflow}>
          
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
