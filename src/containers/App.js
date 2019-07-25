import React, {Component} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import {connect} from 'react-redux'
import {setSearchField, requestRobots} from "../actions";

const mapStateToProps = state =>{
    console.log('4 [Store]');
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange: (event) => {
            console.log('1. [Event]', event);
            return dispatch(setSearchField(event.target.value));
        },
        onRequestRobots: ()=> dispatch(requestRobots())
    }
}

class App extends Component{

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots =  robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });

        console.log('filteredRobots', filteredRobots.length);

        if(isPending){
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

