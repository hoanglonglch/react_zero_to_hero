import React from 'react';
import {robots} from "../listRobots";
import Card from "./Card";

class CardList extends React.Component {
    render() {
        const listRobots = robots.map(robot => <Card key={robot.id} name={robot.name}></Card>);

        return (
            <div>
                {listRobots}
            </div>
        );
    }
}

export default CardList;
