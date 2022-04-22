const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const apiRouter = require("./routes/api");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
  }));

app.use("/api", apiRouter);

const port = process.env.PORT || "5000";

app.listen(port, () => {
    console.log(`Listen on ${port}`);
});