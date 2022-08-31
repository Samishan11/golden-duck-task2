import Link from "next/link";
import Image from 'next/image'
import Navbar from "../../components/Navbar";
import Style from "../../public/static/home.module.css"
import Sideicons from "../../components/Sideicons";
import Solve from "../../webdevelopmentComponent/Solve";
import Workflow from "../../webdevelopmentComponent/Workflow";
import Consultation from "../../components/Consultation";
import Footer from "../../components/Footer";


export default function first() {
  return (
    <>
      <Navbar></Navbar>

      <div className={Style.homeContainer}>
        <div className={Style.container}>
          <div className={Style.leftContainer}>
            <h1 className={Style.firstLine}>Website Development,</h1>
            <h1 className={Style.secondLine}>
              Services
              <path
                d="M2.0789199919778576 188.15788701002128 C78.39838449654198 184.91433494909109, 156.22355504579096 185.80415884981733, 286.2668404380429 188.86433160573426"
                fill="none"
                stroke="#0477bf"
                stroke-width="8"
              ></path>
            </h1>
            <p>
              Whether It’s to increase inquiries, generate more sales or improve your digital strategy our
              passion is creating digital excellence. We provide one of the best web development service in Nepal.
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
            style={{marginTop:"10rem"}}
              loading="lazy"
              src="/assets/images/web-development.png"
              alt=""
              title="677-6775409_lead-generation-png"
              srcset="https://it.goldenduck.com.np/wp-content/uploads/2022/04/web-development-3454628-2918517.png"
              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1020px, 100vw"
              width={800}
            />
          </div>
        </div>
        <Sideicons></Sideicons>
      </div>
      <Solve></Solve>
      <Workflow></Workflow>
      <Consultation></Consultation>
      <Footer></Footer>
    </>
  );
}
