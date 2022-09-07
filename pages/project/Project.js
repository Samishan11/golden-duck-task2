import React, {useEffect , useState} from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sideicon from "../../components/Sideicons";
import Style from "../../public/static/projects.module.css"
import { useRouter } from 'next/router'

const Project = () => {
    const router = useRouter();
    const data = router.query;
    return (
        <>
            <Navbar></Navbar>
            <div className={Style.container}>
                <div className={Style.bgimg}>
                    <div className={Style.content}>
                        <p className={Style.title}>{data.catagory}</p>
                        <p className={Style.text}>{data.brand_name}</p>
                    </div>
                </div>
            </div>
            <Sideicon></Sideicon>
            <div className={Style.imgscroll}>
                <div className={Style.img}>
                    <img src={`https://golden-duck-it.herokuapp.com/${data.image}`} alt="" />
                </div>
                <a className={Style.link} href="#">Visit Live Site</a>
            </div>
            <div className={Style.row}>
                <div className={Style.col}>
                    <div className={Style.colmd1}>
                        <span>Golden Duck Store is a complete tech store based in Anamnagar, Kathmandu and we were tasked with making an eCommerce site for the store. Even though we shared the same parent company, Golden Duck Enterprises; that didn't provide any leeway. In the end, we ended up with the current site which we're proud to show off to the world.</span>
                        <div className={Style.colmd2}></div>
                    </div>
                    <div className={Style.colmd3}><span>The site gets the job done, has minimal design, loads up quickly; what else could I ask for?</span> <p>-Niraj Khanal</p></div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Project