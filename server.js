const express = require("express");
const db = require("./db");
const thali = require("./models/thaliModel");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Server Working🔥");
});

app.get("/getThalis", (req, res) => {
	thali.find({}, (err, docs) => {
		if (err) {
			console.log(err);
		} else {
			res.send(docs);
		}
	});
});

const port = process.env.PORT || 5000;
app.listen(port, () => `Server listening on ${port}`);
