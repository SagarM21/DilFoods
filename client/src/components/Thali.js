import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Thali = ({ thali }) => {
	const [quantity, setQuantity] = useState(1);
	const [sub, setSub] = useState("Weekly");
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div
			style={{ margin: "70px" }}
			className='shadow-lg p-3 mb-5 bg-white rounded'
		>
			<div onClick={handleShow}>
				<h1>
					<b>{thali.name}</b>{" "}
				</h1>
				<img
					src={thali.image}
					alt={thali.name}
					className='img-fluid'
					style={{ height: "200px", width: "200px", borderRadius: "100%" }}
				/>
			</div>

			<div className='flex-container'>
				<div className='w-100 m-1'>
					<p>Subscription</p>
					<select
						className='form-control'
						value={sub}
						onChange={(e) => {
							setSub(e.target.value);
						}}
					>
						{thali.subscription.map((s, i) => {
							return (
								<option value={s} key={i}>
									{s}
								</option>
							);
						})}
					</select>
				</div>
				<div className='w-100 m-1'>
					<p>Quantity</p>
					<select
						value={quantity}
						className='form-control'
						onChange={(e) => {
							setQuantity(e.target.value);
						}}
					>
						{[...Array(10).keys()].map((x, i) => {
							return <option value={i + 1}>{i + 1}</option>;
						})}
					</select>
				</div>
			</div>

			<div className='flex-container'>
				<div className='m-1 w-100'>
					<h1 className='mt-1'>
						Price: {thali.prices[0][sub] * quantity} Rs/-
					</h1>
				</div>
				<div className='m-1 w-100'>
					<button className='btn'>ADD TO CART</button>
				</div>
			</div>

			{/* MODAL */}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{thali.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img
						src={thali.image}
						alt={thali.name}
						style={{ height: "400px" }}
						className='img-fluid'
					/>
					<p>{thali.description}</p>
				</Modal.Body>
				<Modal.Footer>
					<button className='btn' onClick={handleClose}>
						Close
					</button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Thali;
