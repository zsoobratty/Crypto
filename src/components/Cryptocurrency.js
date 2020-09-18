import React from 'react'

const Cryptocurrency = ({coins}) => {
    return (
        <div className='Cryptocurrency'>
            {coins.map((coin) => 
                <div>
                    <li key={coin.id}> {coin.name} </li>
                    <img src={coin.image} alt={coin.name}/>
                </div>
            )}
        </div>
    )
}

export default Cryptocurrency
