import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../Actions/orderActions";

export default function Checkout({ subtotal }) {
	const dispatch = useDispatch();
	function tokenHandler(token) {
		console.log(token);
		dispatch(placeOrder(token, subtotal));
	}
	return (
		<div>
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
