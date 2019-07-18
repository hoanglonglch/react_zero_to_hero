import React, {Component} from 'react';
import CardList from "./CardList";
import {robots} from "./robotsConstant";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

const state = {

};

class App extends Component{

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({robots: data}));
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value});
    }

    render(){
        const filteredRobots =  this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });

        if(this.state.robots.length == 0){
            return <h1>Loading</h1>
        }else{
            return(
                <div className="tc">
                    <h1>Robos Friends</h1>
                    <SearchBox
                        searchField={this.state.searchFiled}
                        searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>

                </div>
            );
        }

    }
}

export default App;

