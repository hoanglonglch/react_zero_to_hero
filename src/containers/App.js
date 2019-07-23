import React, {Component} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/es/connect/mapStateToProps";

class App extends Component{

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    getMessage(){
        this.props.printHello();
    }

    render(){
        return(
            <div className="tc">
                <h1>Robos Friends</h1>
                <button onClick={}>Get Message</button>
                {this.props.message}
            </div>
        );

    }
}

const mapActionsToProps = {
    hello: printHello
}

const mapStateToProps = ()=>{
    console.log(`4 mapStateToProps -> ${JSON.stringify(state.data)}`);
    return {message: this.state.data.message}
}

export default connect(mapStateToProps, mapActionsToProps)(App);

