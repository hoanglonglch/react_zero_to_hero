import {PRINT_HELLO} from "../actions/printHelloAction";

const printHelloReducers= (state={message:'No Message'}, {type,payload})=>{
    switch (type) {
        case PRINT_HELLO:
            return payload;
        default:
            return state;
    }

}

export default printHelloReducers;
