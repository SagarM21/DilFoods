import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllThalis } from "../Actions/thaliActions";
import Thali from "../components/Thali";

const Home = () => {
	const dispatch = useDispatch();
	const thaliState = useSelector((state) => state.getAllThalisReducer);
	const { thalis, error, loading } = thaliState;
	useEffect(() => {
		dispatch(getAllThalis());
	}, []);
	return (
		<div>
			<div className='row'>
				{loading ? (
					<h1>Loading...</h1>
				) : error ? (
					<h1>Something went wrong</h1>
				) : (
					thalis.map((thali, i) => {
						return (
							<div className='col-md-6' key={i}>
								<div>
									<Thali thali={thali} />
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default Home;
