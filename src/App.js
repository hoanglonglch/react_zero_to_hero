import React from 'react';
import CardList from "./CardList";
import {robots} from "./robotsConstant";
import SearchBox from "./SearchBox";

const App = (props)=>{
    return(
        <div className="tc">
            <h1>Robos Friends</h1>
            <SearchBox/>
            <CardList robots={robots}/>
        </div>
    );
};

export default App;

