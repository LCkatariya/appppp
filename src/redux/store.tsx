import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import countReducer from "./reducers/countReducer";
import userDetailsReducer from "./reducers/userDetailsReducer";

const reducer = combineReducers({
    count: countReducer,
    getUserList: userDetailsReducer
})

const middlewareEnhancer = applyMiddleware(thunk);

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

export const store = createStore(reducer, composeWithDevTools(middlewareEnhancer));










