import React from 'react'
import '../styles/Cryptocurrency.css'

const Cryptocurrency = ({coins}) => {
    return (
        <div className='Cryptocurrency'>
            {coins.map((coin) => 
                <div className='coin'>
                    <p className='name' key={coin.id}> {coin.name} ({(coin.symbol).toUpperCase()}) </p>
                    <img className='image' src={coin.image} alt={coin.name}/>
                    <div className="information">
                        <p className="price">Current price: ${coin.current_price}</p>
                        <p className="24hlow">24 hour low: ${coin.low_24h}</p>
                        <p className="24hhigh">24 hour high: ${coin.high_24h}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cryptocurrency
