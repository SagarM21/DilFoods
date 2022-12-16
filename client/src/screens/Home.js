import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllThalis } from "../Actions/thaliActions";
import Thali from "../components/Thali";
import thalis from "../data";

const Home = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllThalis())
	}, []);
	return (
		<div>
			<div className='row'>
				{thalis.map((thali, i) => {
					return (
						<div className='col-md-6' key={i}>
							<div>
								<Thali thali={thali} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
