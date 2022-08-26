import React from "react";
import Style from "../public/static/client.module.css";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from 'swiper'
import Image from "next/image";

// importing images
import image1 from '../public/assets/images/asset 2.png'
import image2 from '../public/assets/images/asset 3.png'
import image3 from '../public/assets/images/asset 4.png'
import image4 from '../public/assets/images/asset 5.png'
import image5 from '../public/assets/images/asset 7.png'

import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Clients() {
SwiperCore.use([Autoplay]);

  return (
    <div className={Style.container}>
      <p>Top Clients</p>
      <h2>We’ve Built Solutions For</h2>
      <div className={Style.clientLogos}>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          grabCursor = {true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false
        }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={Style.logo1}>
              <Image
                src={image1}
                layout="fill"
                class="logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Style.logo1}>
              <Image
                src={image2}
                layout="fill"
                class="logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Style.logo1}>
              <Image
                src={image3}
                layout="fill"
                class="logo"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className={Style.logo1}>
              <Image
                src={image4}
                layout="fill"
                class="logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Style.logo1}>
              <Image
                src={image5}
                layout="fill"
                class="logo"
              />
            </div>
          </SwiperSlide>
   
        </Swiper>
      </div>
    </div>
  );
}

export default Clients;
