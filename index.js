const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
// passeport bearer strategy implémentation
const bearerStrategy = require("./passport/bearerStrategy");
// connect to database
const connect = require("./database/connect");
const app = express();
const port = 4000;
// config cors
app.use(cors());
// dot env config
dotenv.config();
// body parser config
app.use(express.json());
// morgan
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.json({ message: "Welcome back!" });
});


// authApi(jwt, passport, passport-http-bearer)
const authApi = require("./routes/authApi");

// userApi
const userApi = require("./routes/userApi");
// subjectApi
const subjectApi = require("./routes/subjectApi");
// voteApi
const voteApi = require("./routes/voteApi");

app.use("", authApi);
app.use("", userApi);
app.use("", subjectApi);
app.use("", voteApi);


app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
});
