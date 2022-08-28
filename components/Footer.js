import React from "react";
import Style from "../public/static/footer.module.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import{BsInstagram} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <div className={Style.container}>
      <div className={Style.subContainer}>
        <div className={Style.left}>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:01-5705642">(+977) 01-5705642</a>
            </li>
            <li>
              <a href="mailto:it@goldenduck.com.np">it@goldenduck.com.np</a>
            </li>
          </ul>
        </div>
        <div className={Style.middle}>
            <div className={Style.inner}>
                <ul>
                    <li><a href="https://www.facebook.com/goldenduck.store"><FaFacebookF></FaFacebookF></a></li>
                    <li><a href="https://instagram.com/goldenduckstore"><BsInstagram></BsInstagram></a></li>
                    <li><a href="https://www.linkedin.com/company/golden-duck-infotech/"><AiFillLinkedin/></a></li>
                </ul>
            </div>
          
        </div>
        <div className={Style.right}>
          <div className={Style.right1}>
            <h4>Visit</h4>
            <ul>
                <li><a href="https://goo.gl/maps/ExH8YaM7mLfJ4XZL7">Anamnagar – 29, Kathmandu</a></li>
            </ul>
          </div>
          <div className={Style.right2}>
            <h4>Hours</h4>
            <ul>
                <li>Sunday-Friday: 10am – 5pm</li>
                <li>Saturday: closed</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={Style.subFooter}>
        <p>© Golden Duck Enterprises  2022 | Developed and Maintained by <a href="https://golden-duck.com">Golden Duck Enterprises</a></p>
      </div>
    </div>
  );
}

export default Footer;
