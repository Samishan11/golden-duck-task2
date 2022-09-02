import React from 'react'
import Style from '../../public/static/adminDashboard.module.css'

function DashboardComponent() {
  return (
    <div className={Style.dashboard}>
        <div className={Style.dashboardContainer}>
          <div className={Style.dashboardColumn}>
          <div className={Style.text1}><p>5</p></div>
          <div className={Style.text2}><p>Blogs</p></div>
        </div>
        <div className={Style.dashboardColumn}>
          <div className={Style.text1}><p>3</p></div>
          <div className={Style.text2}><p>Feedbacks</p></div>
        </div>
        <div className={Style.dashboardColumn}>
          <div className={Style.text1}><p>8</p></div>
          <div className={Style.text2}><p>Projects</p></div>
        </div>
        <div className={Style.dashboardColumn}>
          <div className={Style.text1}><p>7</p></div>
          <div className={Style.text2}><p>Portfolio</p></div>
        </div>
        </div>
        
      </div>
  )
}

export default DashboardComponent