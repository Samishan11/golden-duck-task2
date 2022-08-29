import React from 'react'
import Home from '../components/contact/Home.js'
import Navbar from '../components/Navbar.js'
import Head from "next/head";
import Footer from '../components/Footer.js';

function contact() {
  return (
    <div>
         <Head>
        <title>Golden Duck IT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
        <Navbar></Navbar>

        </div>
        <Home></Home>
        <Footer></Footer>
    </div>
  )
}

export default contact