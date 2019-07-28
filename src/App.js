import React from 'react';
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import './App.css';
import Scroll from "./components/Scroll";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    robots: data
                });
            })
    }

    onChangeText = (event)=>{
        this.setState({
            searchField: event.target.value
        });
    }

    render() {
        let filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField));

        return (
            <div className="tc">
                <h1>My Robots</h1>
                <SearchBox onChangeText={this.onChangeText}></SearchBox>
                <Scroll>
                    {
                        filteredRobots.length == 0 ? <h1>Loading</h1> : <CardList robots={filteredRobots}/>
                    }
                </Scroll>
            </div>
        );
    }
}


export default App;
