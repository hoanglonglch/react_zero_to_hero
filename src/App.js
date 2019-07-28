import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            route: 'route1'
        };
    }

    onRouteChange = (route) => {
        this.setState({
            route: route
        });
    }


    render() {
        let route = this.state.route;
        if(route == 'route1'){
            return <Page1 onRouteChange={this.onRouteChange}></Page1>

        } else if(route == 'route2'){
            return <Page2 onRouteChange={this.onRouteChange}></Page2>
        } else {
            return <Page3 onRouteChange={this.onRouteChange}></Page3>
        }
    }
}

export default App;
