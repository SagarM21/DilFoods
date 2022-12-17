const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

router.post("/register", async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		res.status(400);
		throw new Error("Please enter all the required fields.");
	}
	const isUserExists = await User.findOne({ email });
	if (isUserExists) {
		res.status(400);
		throw new Error("User already exists, kindly login!");
	}

	try {
		const newUser = await User.create({ name, email, password });
		if (newUser) {
			res.status(201).json({
				_id: newUser._id,
				name: newUser.name,
				email: newUser.email,
				token: generateToken(newUser._id),
			});
		}
	} catch (error) {
		return res.status(400).json({ message: error });
	}
});
router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.find({ email, password });
		// console.log(user.matchPassword(password), "user");
		if (user.length > 0) {
			const currentUser = {
				name: user[0].name,
				email: user[0].email,
				isAdmin: user[0].isAdmin,
				_id: user[0]._id,
				token: generateToken(user._id),
			};
			res.send(currentUser);
		} else {
			return res.status(400).json({ message: "User login failed!" });
		}
	} catch (error) {
		return res.status(400).json({ message: error });
	}
});

module.exports = router;
