import React from "react";
import Style from "../public/static/client.module.css";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from 'swiper'
import Image from "next/image";

// importing images
import image1 from 'assets/images/asset 2.png'



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
                src="assets/images/asset 3.png"
                layout="fill"
                class="logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Style.logo1}>
              <Image
                src="assets/images/asset 4.png"
                layout="fill"
                class="logo"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className={Style.logo1}>
              <Image
                src="assets/images/asset 5.png"
                layout="fill"
                class="logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Style.logo1}>
              <Image
                src="assets/images/asset 6.png"
                layout="fill"
                class="logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Style.logo1}>
              <Image
                src="assets/images/asset 7.png"
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
