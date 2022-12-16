import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../Actions/userActions";

const Login = () => {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();

	const login = () => {
		const user = { email, password };
		console.log(user);
		dispatch(userLogin(user));
	};
	return (
		<div>
			<div className='row justify-content-center mt-5'>
				<div className='col-md-5 mt-5 text-left'>
					<h2 className='text-center m-2' style={{ fontSize: "35px" }}>
						Login
					</h2>
					<div>
						<input
							type='email'
							placeholder='email'
							className='form-control'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<input
							type='password'
							placeholder='password'
							className='form-control'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>

						<button className='btn m-3' onClick={login}>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
