import React from 'react';

class Card extends React.Component {
    render() {
        let {id, name} = this.props;
        return (
            <div className="pa3 ma2 bg-light-green dib br3 grow shadow-hover">
                <img src={`https://robohash.org/${id}`} alt=""/>
                <p>{name}</p>
            </div>
        );
    }
}

export default Card;
