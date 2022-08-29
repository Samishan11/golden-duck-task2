import React from 'react'
import Navbar from '../Navbar'
import DigitalMarketingHome from './DigitalMarketingHome'
import Work from './Work'
import WorkFlow from './WorkFlow'
import Consultation from '../Consultation'
import Footer from '../Footer'

function Home() {
  return (

    <div>
        <Navbar/>
        <DigitalMarketingHome/>
        <Work/>
        <WorkFlow/>
        <Consultation/>
        <Footer/>


    </div>
  )
}

export default Home