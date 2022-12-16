import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllThalis } from "../Actions/thaliActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
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
			<div className='row justify-content-center'>
				{loading ? (
					<Loading />
				) : error ? (
					<Error error='Something went wrong!' />
				) : (
					thalis.map((thali) => {
						return (
							<div className='col-md-5 m-3' key={thali._id}>
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
