import React from "react";
import Navbar from "../../components/Navbar"
import Style from "../../public/static/singleblog.module.css"
import { GoCalendar } from 'react-icons/go';
import { useRouter } from 'next/router'
const parse = require('html-react-parser');

function Blog() {
    const router = useRouter();
    const data = router.query;
    return (
        <>
            <Navbar></Navbar>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.col1}>
                        <img src={`https://golden-duck-it.herokuapp.com/${data.image}`} alt="" />
                    </div>
                    <div className={Style.col2}>
                        <img className={Style.img} src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" alt="" />
                        <div className="authinfo">
                            <h3>Admin Name</h3>
                        </div>
                        <div className="authordesc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a saepe voluptatem explicabo cumque praesentium nam voluptate, consequuntur eveniet! Quibusdam.</p>
                        </div>
                    </div>
                </div>
                <div className={Style.blogpostdetail}>
                    <div className={Style.type}>
                        <p>Word Press</p>
                    </div>
                    <div className="authname">
                        <p>By Admin</p>
                    </div>
                    <div className={Style.date}>
                        <GoCalendar></GoCalendar>
                        <p style={{ marginLeft: "5px" }}>{data.date}</p>
                    </div>
                </div>
                <div className={Style.content}>
                    <div className={Style.row1}>
                        <div className={Style.col1}>
                            <h1>{data.title}</h1>
                            <p>{parse(data.description)}</p>
                        </div>
                        <div className={Style.col4}>
                            <h3>Latest Post</h3>
                            <div className={Style.posts}>
                                <div className={Style.img}>
                                    <img src="https://bunzo-react.pages.dev/static/ecf9deeb4e56ff33ef29993511eb6aaf/1d064/02-special-banner.webp" alt="" />
                                </div>
                                <div className={Style.postcontent}>
                                    <h5>Make your store stand out from the others by...</h5>
                                    <div className={Style.date}>
                                        <GoCalendar></GoCalendar>
                                        <p style={{ marginLeft: "5px" }}>2022/09/03</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog;