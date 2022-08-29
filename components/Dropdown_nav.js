import React from 'react'
import Style from "../public/static/dropdown_nav.module.css"

const Dropdown_nav = ({ hoverShow }) => {
    return (
        <div className={hoverShow === true ? Style.contianer_show : Style.contianer}>
            <div className={Style.main}>
                <div className={Style.line}></div>
                <ul className={Style.links}>
                    <li className={ Style.li}><a href='/services/web-development' style={{ color: "#0477bf" }}>Web Development</a></li>
                    <li className={Style.li}><a href='/degitalmarketing'>Web Development</a></li>
                    <li className={Style.li}><a href='/graphicdesign'>Web Development</a></li>
=======
                    <li className={Style.li}><a href='/services/web-development' style={{ color: "#0477bf" }}>Web Development</a></li>
                    <li className={Style.li}><a href='/degitalmarketing'>Web Development</a></li>
                    <li className={Style.li}><a to='/graphicdesign'>Web Development</a></li>

                </ul>
            </div>
        </div>
    )
}

export default Dropdown_nav;