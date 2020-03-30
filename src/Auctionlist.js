import React from 'react';

const Auctionlist = (props) => {
    return (
        <div className="avatar ma4 bg-hot-pink dib pa2 grow shadow-4 tc">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar"/>
            <h1>{props.name}</h1> 
            <p>{props.work}</p>
        </div>   
    )
}

export default Auctionlist;