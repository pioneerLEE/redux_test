import { createStore, combineReducers, applyMiddleware } from "redux";
import users from "./modules/users";
import thunk from "redux-thunk";

const env = process.env.NODE_ENV;

const middlewares = [thunk];

if(env ==="development"){
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

console.log(env)

const reducer = combineReducers({
    users
})

let store = initialState => createStore(reducer,applyMiddleware(...middlewares)); // ...middlewares 을 통해 array의 middlewares을 unpack할 수 있다

export default store();