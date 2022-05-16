const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
//app.use(fileupload({ useTempFiles: true }));
//routes import

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v2", product);
app.use("/api/v2", user);
app.use("/api/v2", order);

app.use(ErrorHandler);

module.exports = app;
//3.17
