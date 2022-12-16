import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllThalisReducer } from "./Reducers/thaliReducers";

const finalReducer = combineReducers({
	getAllThalisReducer: getAllThalisReducer,
});

const initialState = {};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
	finalReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
