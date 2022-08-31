import React from 'react'
import Style from "../public/static/consultation.module.css"
import Link from 'next/link'
const Consultation = () => {
    return (
        <div className={Style.container}>
            <div className={Style.title}>
                <p>FREE CONSULTATION</p>
            </div>
            <div className={Style.heading}>
                Skip Now, Cry Later.
            </div>
            <div className={Style.subtext}>
                If you skip now, you won’t have the same thoughts tomorrow. This is your sign. Make the move. Get a once-in-a-lifetime opportunity and explode your sales now.Get Free Consultation
            </div>
            <div className={Style.btn}>
                <Link href='/contact'>Get Free Consultation</Link>
            </div>
        </div>
    )
}

export default Consultation