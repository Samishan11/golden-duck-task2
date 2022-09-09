import React, { useState, useEffect, useContext } from 'react'
import Navbar from '../components/Navbar'
import Sideicons from '../components/Sideicons'
import Style from "../public/static/portfoli.module.css"
import { BsFillPlusCircleFill } from 'react-icons/bs';
import Footer from "../components/Footer"
import { PortfolioContext } from '../context/Context';
import Router from 'next/router';
const Portfolio = () => {
    const [Portfolio] = useContext(PortfolioContext);
    console.log(Portfolio)
    // send data
    function sendQuery(data) {
        Router.push({
            pathname: "/project/Project", query: { data: JSON.stringify(data) }
        })
    }
    // get all portfolio
    // const [portfolio, setPortfolio] = useState([]);
    // const getPortfolio = async () => {
    //     try {
    //         const res = await axios.get("https://golden-duck-it.herokuapp.com/api/v4/portfolio")
    //         setPortfolio(res.data.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     getPortfolio()
    // }, [])

    // buttons
    const buttons = [
        {
            name: "All",
            value: "All"
        },
        {
            name: "Logo Design",
            value: "Logo Design"
        },
        {
            name: "Rebranding",
            value: "Rebranding"
        },
        {
            name: "Website Development",
            value: "Web Development"
        },
        {
            name: "Website Redesign",
            value: "Website Redesign"
        }
    ];

    // filter data

    const [filterportfolio, setFiltredPortfolio] = useState(Portfolio);
    useEffect(() => {
        setFiltredPortfolio(Portfolio);
        console.log(Portfolio)
    }, []);
    function filter(val) {
        let filterdata = Portfolio.filter(type => type.catagory === val);
        return filterdata;
    }
    function handlePortfolio(value) {
        let catagory = value;
        catagory !== "All"
            ? setFiltredPortfolio(filter(catagory))
            : setFiltredPortfolio(Portfolio);
    }
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
                    {
                        buttons.map((data) => {
                            return (
                                <li><a onClick={handlePortfolio.bind(this, data.value)}>{data.name}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={Style.branchmain}>
                <div className={Style.branch}>
                    {
                        filterportfolio &&
                        filterportfolio.map(data => {
                            return (
                                <div onClick={sendQuery.bind(this, data)}>
                                    <div className={Style.main}>
                                        <div className={Style.body}>
                                            <img src={data.image.url} alt="JAC Motors" sizes="(max-width:479px) 479px, 100vw " />
                                            <BsFillPlusCircleFill className={Style.plusicon}></BsFillPlusCircleFill>
                                        </div>
                                        <div className="content">
                                            <p className={Style.companyname}>{data.brand_name}</p>
                                            <p className={Style.work}>{data.catagory}</p>
                                        </div>
                                    </div>
                                </div>
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