const express = require("express");
const db = require("./config/db");
const app = express();

app.use(express.json());

const thaliRoute = require("./routes/thalisRoute");
const userRoute = require("./routes/userRoute");

app.use("/api/thalis", thaliRoute);
app.use("/api/users/", userRoute);

app.get("/", (req, res) => {
	res.send("Server Working🔥");
});

const port = process.env.PORT || 5000;
app.listen(port, () => `Server listening on ${port}`);
