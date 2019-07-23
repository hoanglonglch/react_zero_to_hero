import {combineReducers} from 'redux';
import printHelloReducers from "./printHelloReducers";

const combinedReducers = combineReducers({data:printHelloReducers});

export default combinedReducers;
