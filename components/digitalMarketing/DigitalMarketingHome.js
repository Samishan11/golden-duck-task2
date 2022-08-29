import React from "react";
import Style from "../../public/static/digitalMarketingHome.module.css";
import { Link } from "react-scroll";
import Image from "next/image";

function DigitalMarketingHome() {
  return (
    <div className={Style.homeContainer}>
      <div className={Style.container}>
        <div className={Style.leftContainer}>
          <h1 className={Style.firstLine}>Digital Marketing</h1>
          <h1 className={Style.secondLine}>
            Services
            <path
              d="M2.0789199919778576 188.15788701002128 C78.39838449654198 184.91433494909109, 156.22355504579096 185.80415884981733, 286.2668404380429 188.86433160573426"
              fill="none"
              stroke="#0477bf"
              stroke-width="8"
            ></path>
          </h1>
          <p>
            Whether It’s to increase inquiries, generate more sales or improve
            your digital strategy our passion is creating digital excellence.
          </p>
          <Link
            className={Style.getQuoteButton}
            href="https://it.goldenduck.com.np/get-a-quote/"
          >
            Get a Quote
          </Link>
        </div>
        <div className={Style.rightContainer}>
          <img
            src="/assets/images/asset 18.png"
            alt=""
            title="digitalmarketing"
            srcset="https://it.goldenduck.com.np/wp-content/uploads/2022/04/digitalmarketing.png 800w, https://it.goldenduck.com.np/wp-content/uploads/2022/04/digitalmarketing-480x496.png 480w"
            sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw"
            class="wp-image-237422"
            width="800"
            height="827"
          />
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketingHome;
