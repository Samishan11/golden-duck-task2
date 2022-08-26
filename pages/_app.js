import { AppProps } from 'next/app';

import '../style/global.css';

const MyApp = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;