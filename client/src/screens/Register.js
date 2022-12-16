import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../Actions/userActions";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, setCPassword] = useState("");
	const dispatch = useDispatch();

	const register = () => {
		if (password != cPassword) {
			alert("Passwords do not match!");
		} else {
			const user = { name, email, password };
			// console.log(user);
			dispatch(userRegister(user));
		}
	};
	return (
		<div>
			<div className='row justify-content-center mt-5'>
				<div className='col-md-5 mt-5 text-left'>
					<h2 className='text-center m-2' style={{ fontSize: "35px" }}>
						Register
					</h2>
					<div>
						<input
							type='text'
							placeholder='name'
							className='form-control'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
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
						<input
							type='password'
							placeholder='confirm password'
							className='form-control'
							value={cPassword}
							onChange={(e) => setCPassword(e.target.value)}
							required
						/>
						<button className='btn m-3' onClick={register}>
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
