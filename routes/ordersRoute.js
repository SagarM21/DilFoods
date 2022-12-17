const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.SECRET_KEY);
const { v4: uuidv4 } = require("uuid");

router.post("/placeorder", async (req, res) => {
	const { token, subtotal, currentUser, cartItems } = req.body;
	var payment;
	try {
		const customer = await stripe.customers.create({
			email: token.email,
			source: token.id,
		});

		payment = await stripe.paymentIntents.create(
			{
				amount: subtotal * 100,
				currency: "inr",
				customer: customer.id,
				receipt_email: token.email,

				payment_method_types: ["card"],
			},
			{
				idempotencyKey: uuidv4(),
			}
		);
		const paymentConfirm = await stripe.paymentIntents.confirm(payment.id, {
			payment_method: "pm_card_visa",
		});
		res.status(200).send(paymentConfirm);
	} catch (error) {
		return res.status(400).json({ message: error });
	}
});

module.exports = router;
