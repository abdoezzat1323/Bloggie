const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const morgan = require("morgan");

const apiRouter = require("./routes/api");

const app = express();

app.use(cors());
app.use(cors({ credentials: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/uploads", express.static(path.join(__dirname + "/uploads")));
app.use(morgan("dev"));

app.use("/api", apiRouter);

const port = process.env.PORT || "5000";

app.listen(port, () => {
    console.log(`Listen on ${port}`);
});