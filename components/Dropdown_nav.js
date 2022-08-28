import React from 'react'
import Style from "../public/static/dropdown_nav.module.css"
import { Link } from "react-scroll";
const Dropdown_nav = ({ hoverShow }) => {
    return (
        <div className={hoverShow === true ? Style.contianer_show : Style.contianer}>
            <div className={Style.main}>
                <div className={Style.line}></div>
                <ul className={Style.links}>
                    <li className={Style.li}><Link to='/webdevelopment' style={{ color: "#0477bf" }}>Web Development</Link></li>
                    <li className={Style.li}><Link to='/degitalmarketing'>Web Development</Link></li>
                    <li className={Style.li}><Link to='/graphicdesign'>Web Development</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Dropdown_nav;