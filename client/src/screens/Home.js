import React from "react";
import Thali from "../components/Thali";
import thalis from "../data";

const Home = () => {
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
