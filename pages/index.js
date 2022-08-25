import Head from "next/head";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Style from "../public/static/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={Style.homeContainer}>
        <div className={Style.container}>
          <div className={Style.leftContainer}>
            <h1 className={Style.firstLine}>Innovate Better,</h1>
            <h1 className={Style.secondLine}>Faster.</h1>
            <p>
              Whether It’s to increase inquiries, generate more sales or improve
              your digital strategy our passion is creating digital excellence.
            </p>
          </div>
          <div className={Style.rightContainer}></div>
        </div>
      </div>
    </>
  );
}
