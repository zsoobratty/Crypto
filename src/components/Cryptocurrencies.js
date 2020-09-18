import React, {useState, useEffect} from 'react'
import Cryptocurrency from './Cryptocurrency'
import axios from 'axios'

const Cryptocurrencies = () => {
    const [coins, setCoins] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data)
                setLoad(true)
            })
            .catch(err => {
                console.log(err)
                setLoad(true)
            })
    },[])
    console.log(coins)

    return (
        <div className='Cryptocurrencies'>
            <ul>
                { load ? (
                    <Cryptocurrency coins={coins}/>
                ) : (
                    <h1>Loading...</h1>
                )}
            </ul>
        </div>
    )
}

export default Cryptocurrencies
