import React from 'react'
import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';
import {useRouter} from 'next/router'
import Project from '../components/dashboard/Project'

function dashboard(req) {

    const router = useRouter();

    
    const logout = () =>{
        console.log("logging out")
        Cookies.set("Loggedin",false);
        window.location.replace('http://localhost:3000');
    }


  return (

    <div>
      <Project/>
        <button onClick={logout}>LogOut</button>
    </div>
  )
}

export default dashboard