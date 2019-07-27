import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="pa3 ma2 bg-light-green dib br3 grow shadow-hover">
                Hello, {this.props.name}
            </div>
        );
    }
}

export default Card;
