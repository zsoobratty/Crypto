import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Cryptocurrencies = () => {

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/list')
            .then(res => console.log(res))
            .catch(error => console.log(error))
    })
    
    return (
        <div className='Cryptocurrencies'>
            Here is a list of cryptocurrencies
        </div>
    )
}

export default Cryptocurrencies
