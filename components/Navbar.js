import React from "react";
import { useState, useEffect } from "react";
import Style from "./Navbar.module.css";
import { Link } from "react-scroll";

import Aos from "aos";
import "aos/dist/aos.css";

import Image from 'next/image'

function Navbar() {
  const [active, setActive] = useState(`${Style.items}`);
  const [toggleIcon, setToggleIcon] = useState(`${Style.hamburger}`);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navToggle = () => {
    active === `${Style.items}`? setActive(`${Style.items} ${Style.activeMenu}`) : setActive(`${Style.items}`);

    toggleIcon === `${Style.hamburger}`
      ? setToggleIcon(`${Style.hamburger} ${Style.toggleIcon}`)
      : setToggleIcon(`${Style.hamburger}`);
  };

  return (
    <>
      <div className={Style.container}>
        <nav className={Style.navbar}>
          <div className={Style.logoContainer}>
            <ul>
              <a href="/">
              
                  <Image
                    src="/assets/images/asset 0.png"
                    alt="Golden Duck Enterprises Pvt. Ltd."
                    id="logo"
                    data-height-percentage="82"
                    data-actual-width="470"
                    data-actual-height="393"
                    width="50px"
                    height="40px"
                  />
            
              </a>
            </ul>
          </div>

          <div className={Style.right}>
            <ul className={active}>
              <li className={Style.item}>
                <Link to={Style.about}onClick={navToggle} smooth={true}>
                  Home
                </Link>
              </li>
              <li className={Style.item}>
                <Link to={Style.contact} onClick={navToggle} smooth={true}>
                  Services
                </Link>
              </li>
              <li className={Style.item}>
                <Link to={Style.services} onClick={navToggle} smooth={true}>
                  Portfolio
                </Link>
              </li>
              <li className={Style.item}>
                <Link to={Style.services} onClick={navToggle} smooth={true}>
                  Contact Us
                </Link>
              </li>
            </ul>

          </div>
          <div className={Style.startProject}>
              <li className={Style.startProjectButton}>
                <Link to="#" onClick={navToggle} smooth={true}>
                  Start Project
                </Link>
              </li>
          </div>

          <div className={toggleIcon} onClick={navToggle}>
            <div className={`${Style.hamItem} ${Style.line1}`}></div>
            <div className={`${Style.hamItem} ${Style.line2}`}></div>
            <div className={`${Style.hamItem} ${Style.line3}`}></div>
          </div>
        </nav>
      </div>
    </>
  );
  }

export default Navbar;