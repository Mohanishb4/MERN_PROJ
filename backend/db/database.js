const mongoose = require("mongoose");

const connectDatabse = () => {
  const DB =
    "mongodb+srv://Ishali:myDatabase@cluster0.itlsc.mongodb.net/book_shop?retryWrites=true&w=majority";

  // mongoose
  //   .connect(DB)
  //   .then(() => {
  //     console.log("Connection succesfull");
  //   })
  //   .catch((err) => console.log("No connection"));

  ////////////////////////////////////////////////////////////////////

  mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("Database connection susscessfull!");
  });

  // mongoose.connect("mongodb://127.0.0.1:27017/book-shop");

  //   mongoose
  //     .connect(process.env.vB_URL, {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //     })
  //     .then((data) => {
  //       console.log(`moongodb is connected to server:${data.connection.host}`);
  //     });
};

module.exports = connectDatabse;
