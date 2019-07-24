import React, {Component} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import {connect} from 'react-redux'
import {setSearchField} from "../actions";

const mapStateToProps = state =>{
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component{

    constructor() {
        super();
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({robots: data}));
    }

    render(){
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots =  robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });

        if(!robots.length){
            return <h1>Loading</h1>
        }else{
            return(
                <div className="tc">
                    <h1>Robos Friends</h1>
                    <SearchBox
                        searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>

                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

