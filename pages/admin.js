import React, { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import {useRouter} from 'next/router'
function admin() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const router = useRouter();


    const loginHandler = async () =>{
            
        
        
        const config = {
                header: {
                "Content-Type": "application/json",
                },
        };
        
          try {
            const { data } = await axios.post(
              "https://golden-duck-it.herokuapp.com/api/v4/admin/login",
              {
                email,
                password,
              },
              config
            );
      
            Cookies.set("accessToken", data.accessToken);
            Cookies.set("refressToken",data.refreshToken)

            Cookies.set("Loggedin",true)
            console.log(Cookies.get("Loggedin"))

            if(data.message === 'Login succesfully.'){
                router.push('/dashboard')
                console.log(router.pathname());
            }
      
           
          } catch (error) {
            console.log(error)
          }

        
    }



  return (
    <>

<div className="container">
        <div className="screen">
          <div className="screen__content">
            <form method="POST" className="login" >
              <div className="login__field">
                <i className="login__icon fas fa-user" />
                <input type="text" value = {email} className="login__input" placeholder="User name / Email"  onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock" />
                <input type="password" value={password} className="login__input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
              </div>
            			
            </form>
            <button className="button login__submit" onClick={loginHandler}>
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right" />
              </button>	
            <div className="social-login">
              <h3>Golden Duck Enterprises</h3>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram" />
                <a href="#" className="social-login__icon fab fa-facebook" />
                <a href="#" className="social-login__icon fab fa-twitter" />
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />		
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>		
        </div>
      </div>
    </>
  );
}

export default admin;
