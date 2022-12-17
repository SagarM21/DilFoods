import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../Actions/orderActions";
import Error from "./Error";
import Loading from "./Loading";
import Success from "./Success";

export default function Checkout({ subtotal }) {
	const orderState = useSelector((state) => state.placeOrderReducer);
	const { loading, error, success } = orderState;
	const dispatch = useDispatch();
	function tokenHandler(token) {
		console.log(token);
		dispatch(placeOrder(token, subtotal));
	}
	return (
		<div>
			{loading && <Loading />}
			{error && <Error error='Something went wrong!' />}
			{success && <Success success='Your order placed successfully' />}
			<StripeCheckout
				amount={subtotal * 100}
				shippingAddress
				token={tokenHandler}
				currency='INR'
				stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
			>
				<button className='btn'>Pay</button>
			</StripeCheckout>
		</div>
	);
}
