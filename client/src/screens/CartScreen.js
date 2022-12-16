import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartScreen = () => {
	const dispatch = useDispatch();
	const cartState = useSelector((state) => state.cartReducer);
	const cartItems = cartState.cartItems;
	return (
		<div>
			<div className='row justify-content-center'>
				<div className='col-md-6'>
					<h2 style={{ fontSize: "40px" }}>My Cart</h2>
					{cartItems.map((item) => {
						return (
							<div className='flex-container'>
								<div className='text-left m-1 w-100'>
									<h1>
										{item.name} [{item.subscription}]
									</h1>
									<h1>
										Price: {item.quantity} * {item.prices[0][item.subscription]}{" "}
										= {item.price}
									</h1>
									<h1 style={{ display: "inline" }}>Quantity: </h1>
									<i className='fa fa-plus' aria-hidden='true'></i>
									<b>{item.quantity}</b>
									<i className='fa fa-minus' aria-hidden='true'></i>
									<hr />
								</div>

								<div className='w-100 m-1'>
									<img
										src={item.image}
										alt={item.name}
										style={{ height: "80px", width: "80px" }}
									/>
								</div>

								<div className='w-100 m-1'>
									<i className='fa fa-trash mt-4' aria-hidden='true'></i>
								</div>
							</div>
						);
					})}
				</div>
				<div className='col-md-4'></div>
			</div>
		</div>
	);
};

export default CartScreen;
