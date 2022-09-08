import { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from "next/head";
import Cookies from 'js-cookie';
import axios from 'axios';
axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get('accessToken')
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/global.css';
import { PortfolioProvider } from '../context/Context';
const MyApp = ({ Component, pageProps }) => (
  <PortfolioProvider>
    <Component {...pageProps} />
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </PortfolioProvider>


);

export default MyApp;