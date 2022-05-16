const app = require("./app");
const cloudinary = require("cloudinary");

const dotenv = require("dotenv");
const connectDatabse = require("./db/database.js");

//handling uncaught exception

process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting down server due to uncaught exception");
});

//config

dotenv.config({
  path: "backend/config/.env",
});

//connect dataabse
connectDatabse();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//create server

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// app.listen(port, () => {
//   console.log("Server is up on port " + port);
// });

//unhandled rejection

process.on("unhandledRejection", (err) => {
  console.log(`Shutting down server for ${err.message}`);
  console.log("Shutting down server due to unhandles rejection");

  server.close(() => {
    process.exit(1);
  });
});
