import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Solution from "../components/Solution";
import Succes from "../components/Succes";
import Capabilities from "../components/Capabilities";
import Clients from "../components/Clients";
import Projects from "../components/Projects";
import Style from "../public/static/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Golden Duck IT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={Style.homeContainer}>
        <div className={Style.container}>

          <div className={Style.leftContainer}>
            <h1 className={Style.firstLine}>Innovate Better,</h1>
            <h1 className={Style.secondLine}>
              Faster.
              <path
                d="M2.0789199919778576 188.15788701002128 C78.39838449654198 184.91433494909109, 156.22355504579096 185.80415884981733, 286.2668404380429 188.86433160573426"
                fill="none"
                stroke="#0477bf"
                stroke-width="8"
              ></path>
            </h1>
            <p>
              Whether It’s to increase inquiries, generate more sales or improve
              your digital strategy our passion is creating digital excellence.
            </p>
            <Link
              className={Style.getQuoteButton}
              href="https://it.goldenduck.com.np/get-a-quote/"
            >
              Get a Quote
            </Link>
          </div>
          <div className={Style.rightContainer}>
            <img
              loading="lazy"
              src="https://it.goldenduck.com.np/wp-content/uploads/2022/04/677-6775409_lead-generation-png.png"
              alt=""
              title="677-6775409_lead-generation-png"
              srcset="https://it.goldenduck.com.np/wp-content/uploads/2022/04/677-6775409_lead-generation-png.png 1020w, https://it.goldenduck.com.np/wp-content/uploads/2022/04/677-6775409_lead-generation-png-980x1072.png 980w, https://it.goldenduck.com.np/wp-content/uploads/2022/04/677-6775409_lead-generation-png-480x525.png 480w"
              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1020px, 100vw"
              width="1020"
              height="1116"
            />
          </div>
        </div>

      </div>
      <Solution/>
      <Succes/>
      <Capabilities/>
      <Clients/>
      <Projects/>
    </>
  );
}
