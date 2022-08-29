import React from "react";
import Navbar from "../Navbar";
import Style from "../../public/static/contactHome.module.css";
import ContactForm from "./ContactForm";

import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import Sideicons from "../Sideicons";
function Home() {
  return (
    <div>
      <div className={Style.container}>
        <div className={Style.subContainer}>
          <h4>GET IN TOUCH</h4>
          <h2>CONTACT US</h2>
        </div>
      </div>
      <div className={Style.contactDetails}>
        <div className={Style.leftContainer}>
          <div className={Style.leftHeading}>
            <p>GET IN TOUCH</p>
            <h4>Contact or Visit Us</h4>
          </div>
          <div className={Style.leftBody}>
            <div className={Style.leftCol}>
              <p>LOCATION</p>
              <a href="">
                <h5>Anamnagar -29, Kathmandu Nepal</h5>
              </a>
            </div>
            <div className={Style.rightCol}>
              <p>CONTACT</p>
              <a href="">
                <h5>it@goldenduck.com.np</h5>
              </a> 
              <a href="">
                <h5>+977-015705642</h5>
              </a>
            </div>
          </div>
          <div className={Style.leftFooter}>
            <p>FOLLOW US</p>
            <div className={Style.socialLinks}>
                <div className={Style.facebook}><a href="https://www.facebook.com/goldenduck.store"><FaFacebookF/></a></div>
                <div className={Style.instagram}><a href="https://instagram.com/goldenduckstore"><FaInstagram/></a></div>
            </div>
          </div>
        </div>
        <div className={Style.rightContainer}>
            <Sideicons></Sideicons>
            <ContactForm/>
        </div>
      </div>
      <div className={Style.map}>
      <div className={Style.googleMapContainer}>
              <iframe
                className={Style.googleMapImg}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56521.48204747972!2d85.328938!3d27.698983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc575a3aa89a504bb!2sGolden%20Duck%20Enterprises%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1642869920777!5m2!1sen!2snp"
                allowfullscreen=""
                loading="lazy"
                data-rocket-lazyload="fitvidscompatible"
                data-lazy-src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56521.48204747972!2d85.328938!3d27.698983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc575a3aa89a504bb!2sGolden%20Duck%20Enterprises%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1642869920777!5m2!1sen!2snp"
                data-ll-status="loaded"
              ></iframe>
            </div>
      </div>
    </div>
  );
}

export default Home;
