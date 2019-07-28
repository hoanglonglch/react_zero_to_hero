import React from 'react';
import './App.css';
import Page1 from "./components/Page1";

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            route: 'page1',
            component: ''
        };
    }

    onRouteChange = (route) => {
        console.log('log');
        if(route === 'page1'){
            this.setState({route: route});

        }else if(route === 'page2'){
            import('./components/Page2').then(Page2=>{
                console.log('Page2', Page2);
                this.setState({
                   route: route,
                   component: Page2.default
                });
            });

        }else if(route === 'page3'){
            import('./components/Page3').then(Page3=>{
                this.setState({
                    route: route,
                    component: Page3.default
                });
            });
        }
    }


    render() {
        let route = this.state.route;
        if(route == 'page1'){
            return <Page1 onRouteChange={this.onRouteChange}></Page1>

        }else{
            return <this.state.component onRouteChange={this.onRouteChange}/>;
        }

    }
}

export default App;
