import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllThalisReducer } from "./Reducers/thaliReducers";
import { cartReducer } from "./Reducers/cartReducers";

const finalReducer = combineReducers({
	getAllThalisReducer: getAllThalisReducer,
	cartReducer: cartReducer,
});

const cartItems = localStorage.getItem("cartItems")
	? JSON.parse(localStorage.getItem("cartItems"))
	: [];

const initialState = {
	cartReducer: { cartItems: cartItems },
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
	finalReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
