import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <div>
                <input className="pa3 ma2 bg-lightest-blue ba b--green" type="text"
                    onChange={this.props.onChangeText}
                />
            </div>
        );
    }
}

export default SearchBox;
