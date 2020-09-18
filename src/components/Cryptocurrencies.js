import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Cryptocurrencies = () => {
    const [coins, setCoins] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/list')
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
                    coins.map((coin, index) => <li> {coin.id} </li>) 
                ) : (
                    <h1>Loading...</h1>
                )}
            </ul>
        </div>
    )
}

export default Cryptocurrencies
