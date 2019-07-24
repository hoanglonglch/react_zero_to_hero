import {CHANGE_SEARCH_FIELD} from "./constants";

const initialState = {
    searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
    console.log('3. [Reducer]');
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            console.log('3.5.1 [Reducer]');
            return Object.assign({}, state, {searchField: action.payload} );
        default:
            console.log('3.5.2 [Reducer]');
            return state;
    }
}
