import React from 'react';
import Card from "./Card";

class CardList extends React.Component {
    render() {
        let {robots} = this.props;
        robots = robots.map(robot => <Card key={robot.id} id={robot.id} name={robot.name}></Card>);

        return (
            <div>
                {robots}
            </div>
        );
    }
}

export default CardList;
