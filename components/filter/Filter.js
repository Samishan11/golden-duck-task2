import React, {useState,useEffect} from 'react'
export function getPortfolio() {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
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
  const portfolioList = portfolio;
  return portfolioList;
}

export function filterPortfolio(pokeType) {
  let filterportfolioList = getPortfolio().filter(type => type.catagory === pokeType);
  return filterportfolioList;
}
