const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("connected", () => {
	console.log("Database connected successfully");
});

db.on("error", () => {
	console.log("Database connection failed!");
});

module.exports = mongoose;
