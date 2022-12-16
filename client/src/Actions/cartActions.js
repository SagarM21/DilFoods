export const addToCart =
	(thali, quantity, subscription) => (dispatch, getState) => {
		var cartItem = {
			name: thali.name,
			_id: thali._id,
			image: thali.image,
			subscription: subscription,
			quantity: quantity,
			prices: thali.prices,
			price: thali.prices[0][subscription] * quantity,
		};

		dispatch({ type: "ADD_TO_CART", payload: cartItem });

		const cartItems = getState().cartReducer.cartItems;
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	};
