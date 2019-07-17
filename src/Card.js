import React from 'react';

const Card = ({id, name, email})=>{
    return(
        <div className="bg-green dib ma3 pa5 shadow-hover">
            <img src={"https://robohash.org/"+id} alt=""/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;

