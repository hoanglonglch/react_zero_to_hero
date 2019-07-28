import React from 'react';

export default function asyncComponent(importComponent) {
    class AsyncComponent extends React.Component{

        constructor(props, context) {
            super(props, context);
            this.state = {
                component: null
            }
        }


        async componentDidMount() {
            // Way 1: short way
            /*const {default: component} = await importComponent();
            this.setState({
                component: component
            });*/

            // Way 2: Normal way
            const component = await importComponent();
            this.setState({
                component: component.default
            });

        }

        render(){
            const Component = this.state.component;
            return Component ? <Component {...this.props}/> : null;
        }
    }

    return AsyncComponent;
};
