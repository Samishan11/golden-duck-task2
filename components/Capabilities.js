import React from "react";
import Style from "../public/static/capabilities.module.css";
import { AiOutlineTeam, AiFillMessage, AiFillLock } from "react-icons/ai";
import { BsSuitHeartFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

function Capabilities() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1 , left: 0},
    hidden: { opacity: 0.7, scale: 1 , left: -300},
  }

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className={Style.container}>
      <div className={Style.leftContainer}>
        <p>Capabilities</p>
        <h2>We Provide Services that Defy Your Expectations</h2>

        <div className={Style.listContainer}>
          <ul>
            <li>
              <AiFillLock /> Accountability and Trust
            </li>
            <li>
              <AiFillMessage /> Communication
            </li>
            <li>
              <AiOutlineTeam /> Confident Team
            </li>
            <li>
              <BsSuitHeartFill /> Customer Statisfaction
            </li>
            <li>
              <MdAccessTimeFilled /> Work Productivity
            </li>
            <li>
              <FaBrain /> Every Detail Matters
            </li>
          </ul>
        </div>
      </div>
      <div className={Style.rightContainer}>
        <p>Our company values</p>
        <h2>Our Solution Changes Your Life</h2>
        <div className={Style.analytics}>
          <ul>
            <li>
              <h4>Digital Marketing</h4>
              <div className={Style.row}>
                <motion.div
                  variants={boxVariant}
                  initial="hidden"
                  animate={control}
                  ref={ref}
                  className={Style.rowColor1}
                ><span>95%</span></motion.div>
              </div>
            </li>
            <li>
              <h4>Website and Mobile Development</h4>
              <div className={Style.row}>
              <motion.div
                  variants={boxVariant}
                  initial="hidden"
                  animate={control}
                  ref={ref}
                  className={Style.rowColor2}
                ><span>90%</span></motion.div>
              </div>
            </li>
            <li>
              <h4>Graphic Design</h4>

              <div className={Style.row}>
              <motion.div
                  variants={boxVariant}
                  initial="hidden"
                  animate={control}
                  ref={ref}
                  className={Style.rowColor3}
                ><span>85%</span></motion.div>
              </div>
            </li>
            <li>
              <h4>Social Media Management</h4>
              <div className={Style.row}>
              <motion.div
                  variants={boxVariant}
                  initial="hidden"
                  animate={control}
                  ref={ref}
                  className={Style.rowColor4}
                ><span>90%</span></motion.div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
