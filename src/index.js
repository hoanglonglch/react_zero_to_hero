import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from "./containers/App";
import {Provider, connect} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {searchRobots} from "./reducers";
import {createLogger, } from "redux-logger";

const logger = createLogger();
const store = createStore(searchRobots,  applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
