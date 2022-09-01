import { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from "next/head";


import '../style/global.css';


const MyApp = ({ Component, pageProps }) => (
  <>
  <Component {...pageProps} />
  </>
  
);

export default MyApp;