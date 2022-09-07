import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const PortfolioContext = createContext();

export const PortfolioProvider = (props) => {
    const [Portfolio, setPortfolio] = useState(null);
    useEffect(() => {
        axios.get("https://golden-duck-it.herokuapp.com/api/v4/portfolio").then(function (result) {
            setPortfolio(result.data.data)
        })
    }, [])
    console.log(Portfolio)
    return (
        <PortfolioContext.Provider value={[Portfolio, setPortfolio]}>
            {props.children}
        </PortfolioContext.Provider>
    )
}