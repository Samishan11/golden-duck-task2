import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineDone } from "react-icons/md";
import { GoDeviceMobile } from "react-icons/go";
import Style from "../public/static/solutionSection.module.css";
import Link from "next/link";
const Solve = () => {
    return (
        <div className={Style.container}>
            <div className={Style.heading}>
                <p>Solve Problem</p>
                <div>
                    <h2>
                        Our Website Development Offerings
                    </h2>
                </div>
            </div>
            <div className={Style.solutions}>
                <div className={Style.solution}>
                    <div className={Style.solutionDetails}>
                        <div className={Style.icon}>
                            <GoDeviceMobile />
                        </div>
                        <div className={Style.solutionDetailsContent}>
                            <div className={Style.solutionList}>
                                <h4>Responsive Website</h4>

                                <ul>
                                    <li><MdOutlineDone /> Responsive Website</li>
                                    <li><MdOutlineDone /> Search Engine Friendly</li>
                                    <li><MdOutlineDone /> Content Management System</li>
                                    <li><MdOutlineDone />Social Media Integration</li>
                                    <li><MdOutlineDone /> Photo Gallery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Link href='https://it.goldenduck.com.np/website-development-in-nepal/'>Get a Quote</Link>
                </div>
                <div className={Style.solution}>
                    <div className={Style.solutionDetails}>
                        <div className={Style.icon}>
                            <AiOutlineShoppingCart />
                        </div>
                        <div className={Style.solutionDetailsContent}>
                            <div className={Style.solutionList}>
                                <h4>Ecommerce Website</h4>

                                <ul>
                                    <li><MdOutlineDone /> Logo and Branding Design</li>
                                    <li><MdOutlineDone /> Social Media Design</li>
                                    <li><MdOutlineDone /> Infographics/Print Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Link href='https://it.goldenduck.com.np/graphic-designer-in-nepal/'>Get a Quote </Link>

                </div>
                <div className={Style.solution}>
                    <div className={Style.solutionDetails}>
                        <div className={Style.icon}>
                            <FaLaptopCode />
                        </div>
                        <div className={Style.solutionDetailsContent}>
                            <div className={Style.solutionList}>
                                <h4>Web Application</h4>

                                <ul>
                                    <li><MdOutlineDone />   Search Engine Optimization</li>
                                    <li><MdOutlineDone />   Social Media Marketing</li>
                                    <li><MdOutlineDone />   Email Marketing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Link href='https://it.goldenduck.com.np/digital-marketing-company-in-nepal/'>Get a Quote </Link>
                </div>
            </div>
        </div>
    )
}

export default Solve