import axios from 'axios'
import React from 'react'
import Style from '../../public/static/adminDashboard.module.css'
import { useState ,useEffect } from 'react';

function DashboardComponent() {

  const [user,setUser] = useState();

  const getUser = async () => {
    try {
      const response = await axios.get('https://golden-duck-it.herokuapp.com/api/v4/contactGet');
      console.log('hello')
      console.log(response.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect  (()=>{
    getUser()
  },[])

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

      <div className={Style.userContainer}>

      </div>



    </div>
  )
}

export default DashboardComponent