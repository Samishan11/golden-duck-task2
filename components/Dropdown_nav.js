import React from 'react'
import Style from "../public/static/dropdown_nav.module.css"
import Link from 'next/link'

const Dropdown_nav = ({ hoverShow }) => {
    return (
        <div className={hoverShow === true ? Style.contianer_show : Style.contianer}>
            <div className={Style.main}>
                <div className={Style.line}></div>
                <ul className={Style.links}>
                    
                    <li className={Style.li}><Link href='/services/web-development'>Web Development</Link></li>
                    <li className={Style.li}><Link href='/services/digital-marketing'>Digital Marketing</Link></li>
                    <li className={Style.li}><Link href='/services/graphic-design'>Graphic Design</Link></li>

                </ul>
            </div>
        </div>
    )
}

export default Dropdown_nav;