import React from 'react';

const Card=({id,name,email})=>{
    return (
        <div className='bg-light-green dib br1 pd1 ma2 tc bw3 grow'>
            <img src={`https://robohash.org/${id}?size=100*100`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;
