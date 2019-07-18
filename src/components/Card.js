import React from 'react';

const Card = ({id, name, email})=>{
    return(
        <div className="b--green br3 bg-light-green dib ma2 pa3 shadow-hover grow">
            <img src={"https://robohash.org/"+id} alt=""/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;

