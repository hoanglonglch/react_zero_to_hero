import React, {Component} from 'react';
import CardList from "./CardList";
import {robots} from "./robotsConstant";
import SearchBox from "./SearchBox";

const state = {

};

class App extends Component{

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchFiled: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value});
    }

    render(){
        // bug
        const filteredRobots =  this.state.robots.filter(robot =>{
            console.log(robot.name.toLowerCase().includes(this.state.searchFiled.toLowerCase()), robot.name);
            return robot.name.toLowerCase().includes(this.state.searchFiled.toLowerCase())
        });

        console.log('filteredRobots', filteredRobots);
        return(
            <div className="tc">
                <h1>Robos Friends</h1>
                <SearchBox
                    searchField={this.state.searchFiled}
                    searchChange={this.onSearchChange}/>
                <CardList robots={robots}/>
            </div>
        );
    }
}

export default App;

