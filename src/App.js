import React from 'react';
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="tc">
          <h1>My Robots</h1>
          <SearchBox></SearchBox>
          <CardList/>
        </div>
    );
  }
}


export default App;
