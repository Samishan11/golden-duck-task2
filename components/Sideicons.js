import React from 'react'
import Style1 from "../public/static/sideicons.module.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiAutoRepair } from 'react-icons/gi';
import { GiWorld } from 'react-icons/gi';
import { BsFillTriangleFill } from 'react-icons/bs';
const Sideicons = () => {
    return (
        <div className={Style1.sideicons}>
            <div className={Style1.row}>
                <div className={Style1.icon}>
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                </div>
                <div className={Style1.textmain}>
                    <BsFillTriangleFill className={Style1.triangelicon}></BsFillTriangleFill>
                    <p className={Style1.text}>Compuater service</p>
                </div>
            </div>
            <div className={Style1.row}>
                <div className={Style1.icon}>
                    <GiAutoRepair></GiAutoRepair>
                </div>
                <div className={Style1.textmain}>
                    <BsFillTriangleFill className={Style1.triangelicon}></BsFillTriangleFill>
                    <p className={Style1.text}>Compuater service</p>
                </div>
            </div>
            <div className={Style1.row}>
                <div className={Style1.icon}>
                    <GiWorld></GiWorld>
                </div>
                <div className={Style1.textmain}>
                    <BsFillTriangleFill className={Style1.triangelicon}></BsFillTriangleFill>
                    <p className={Style1.text}>Compuater service</p>
                </div>
            </div>

        </div>
    )
}

export default Sideicons;