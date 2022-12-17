import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function Checkout({ Subtotal }) {
	function tokenHandler(token) {
		console.log(token);
	}
	return (
		<div>
			<StripeCheckout
				amount={Subtotal * 100}
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
