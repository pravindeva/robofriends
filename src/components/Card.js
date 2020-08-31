import React from 'react';

const Card=({id,name,email})=>{
    return (
        <div className='bg-light-green dib br1 pd1 ma2 tc grow'>
            <img src={`https://robohash.org/${id}?70*70`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;