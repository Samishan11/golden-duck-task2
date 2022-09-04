import { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from "next/head";
import Cookies from 'js-cookie';
import axios from 'axios';
axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get('accessToken')
import '../style/global.css';


const MyApp = ({ Component, pageProps }) => (
  <>
  <Component {...pageProps} />
  </>
  
);

export default MyApp;