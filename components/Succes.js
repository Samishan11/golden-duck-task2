import React from "react";
import Style from "../public/static/success.module.css";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

function Succes() {
  const boxVariant1 = {
    visible: { opacity: 1,scale: 1, top: 0 , transition: { duration: 0.3 }},
    hidden: { opacity: 0, scale: 1, top: 200 },
  };
  const boxVariant2 = {
    visible: { opacity: 1, scale: 1, top: 0 ,transition: { duration: 0.4 }},
    hidden: { opacity: 0, scale: 1, top: 200 },
  };

  const boxVariant3 = {
    visible: { opacity: 1, scale: 1, top: 0 , transition: { duration: 0.6 }},
    hidden: { opacity: 0, scale: 1, top: 200 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className={Style.container}>
      <div className={Style.heading}>
        <p>Grow Bigger</p>
        <div>
          <h2>Your Succes is Our success</h2>
        </div>
      </div>
      <div className={Style.projectCounts}>
        <motion.div
          className={Style.column}
          variants={boxVariant1}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          <div className={Style.text1}>
            <p>50+</p>
          </div>
          <div className={Style.text2}>
            <p>Completed Projects</p>
          </div>
        </motion.div>
        <motion.div
          className={Style.column}
          variants={boxVariant2}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          <div className={Style.text1}>
            <p>30+</p>
          </div>
          <div className={Style.text2}>
            <p>Happy Client</p>
          </div>
        </motion.div>
        <motion.div
          className={Style.column}
          variants={boxVariant3}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          <div className={Style.text1}>
            <p>24/7</p>
          </div>
          <div className={Style.text2}>
            <p>Customer Service</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Succes;
