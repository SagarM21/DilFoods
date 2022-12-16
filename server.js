const express = require("express");
const db = require("./db");
const thali = require("./models/thaliModel");
const app = express();

app.use(express.json());

const thaliRoute = require("./routes/thalisRoute");

app.use("/api/thalis", thaliRoute);

app.get("/", (req, res) => {
	res.send("Server Working🔥");
});

const port = process.env.PORT || 5000;
app.listen(port, () => `Server listening on ${port}`);
