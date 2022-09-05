import React from 'react'
import Navbar from '../components/Navbar'
import Sideicons from '../components/Sideicons'
import Style from "../public/static/portfoli.module.css"
import { BsFillPlusCircleFill } from 'react-icons/bs';
import Footer from "../components/Footer"
import axios from 'axios';

const Portfolio = () => {
    // get all portfolio
    const [portfolio, setPortfolio] = React.useState([]);
    React.useEffect(() => {
        const getPortfolio = async () => {
            try {
                const res = await axios.get("https://golden-duck-it.herokuapp.com/api/v4/portfolio")
                setPortfolio(res.data.data)
                console.log(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getPortfolio()
    }, [])

    return (
        <div className={Style.contianer}>
            <Navbar></Navbar>
            <div className={Style.bgimg}>
                <div className={Style.content}>
                    <p className={Style.title}>Protfolio</p>
                    <p className={Style.text}>The quality and style we follow</p>
                </div>
            </div>
            <Sideicons></Sideicons>
            <div className={Style.Links}>
                <ul className={Style.ul}>
                    <li><a>All</a></li>
                    <li><a>Logo Design </a></li>
                    <li><a>Rebranding</a></li>
                    <li><a>Website Development</a></li>
                    <li><a>Website Redesign</a></li>
                </ul>
            </div>
            <div className={Style.branchmain}>
                <div className={Style.branch}>
                    {
                        portfolio.map(data => {
                            return (
                                <a href="/project/Project">
                                    <div className={Style.main}>
                                        <div className={Style.body}>
                                            <img src={`http://localhost:8000/${data.image}`} alt="JAC Motors" sizes="(max-width:479px) 479px, 100vw " />
                                            <BsFillPlusCircleFill className={Style.plusicon}></BsFillPlusCircleFill>
                                        </div>
                                        <div className="content">
                                            <p className={Style.companyname}>{data.brand_name}</p>
                                            <p className={Style.work}>{data.catagory}</p>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
            <div className={Style.line} />
            <Footer></Footer>
        </div>
    )
}

export default Portfolio;