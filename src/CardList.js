import React from 'react';
import Card from "./Card";

const CardList = ({robots})=>{
    const robotList = robots.map((robot, index)=>{
        return(
            <Card
                key={index}
                email={robot.email}
                id={robot.id}
                name={robot.name}
            />
        )
    });
    return(
        <div>
            {robotList}
        </div>
    );
};

export default CardList;

