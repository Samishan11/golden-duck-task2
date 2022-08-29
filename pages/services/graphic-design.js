import React from 'react'
import Sideicons from '../../components/Sideicons'
import Style from "../../public/static/home.module.css"
import Navbar from "../../components/Navbar";
import Solve from '../../webdevelopmentComponent/Solve';
import Workflow from '../../webdevelopmentComponent/Workflow';
import Consultation from '../../components/Consultation';
import Footer from '../../components/Footer';

const graphicdesign = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className={Style.homeContainer}>
                <div className={Style.container}>
                    <div className={Style.leftContainer}>
                        <h1 className={Style.firstLine}>Graphic  Design,</h1>
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
                            Make a brand that is easy to remember and different from the crowd.
                        </p>
                        <a
                            className={Style.getQuoteButton}
                            href="https://it.goldenduck.com.np/get-a-quote/">
                            Get a Quote
                        </a>
                    </div>
                    <div className={Style.rightContainer}>
                        <img style={{ marginTop: "100px", width: "30rem" }}
                            loading="lazy"
                            src="/assets/images/asset 27.svg"
                            alt=""
                            title="677-6775409_lead-generation-png"
                        />
                    </div>
                </div>
                <Sideicons></Sideicons>
                <Solve></Solve>
                <Workflow></Workflow>
                <Consultation></Consultation>
                <Footer></Footer>
            </div>
        </>
    )
}

export default graphicdesign