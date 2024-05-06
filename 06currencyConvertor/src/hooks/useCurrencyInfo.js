import { useEffect, useState } from "react";


//this hook will return data 
function useCurrencyInfo(currency) {
    const [data,setData]=useState({})
    //we want that when this hook load or is used then this api is called so we use useEffect it automaticaly calls fetch
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}
//returning method
export default useCurrencyInfo;