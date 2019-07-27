import React from 'react';
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            robots: []
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

    render() {
    return (
        <div className="tc">
          <h1>My Robots</h1>
          <SearchBox></SearchBox>
          <CardList robots={this.state.robots}/>
        </div>
    );
  }
}


export default App;
