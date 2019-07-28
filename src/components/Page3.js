import React from 'react';
import logo from "../logo.svg";

const Page3 =({onRouteChange})=>{
    return(
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={()=>onRouteChange('route1')}>Page1</button>
                <button onClick={()=>onRouteChange('route2')}>Page2</button>
                <button className="disabled">Page3</button>
            </header>
        </div>
    );
}
export default Page3;
