const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name of product"],
    trim: true,
    maxlength: [15, "Product name cannot exceed than 15 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description of product"],
    maxlength: [4000, "Description cannot exceed than 4000 characters"],
  },

  price: {
    type: Number,
    required: [true, "Please add price of products"],
    maxlength: [8, "price cannot exceed 8 characters"],
  },
  discountPrice: {
    type: String,
    required: false,
    maxlength: [4, "Discount cannot exceed 4 characters"],
  },
  subject: {
    type: String,
  },
  year: {
    type: String,
  },
  ratings: {
    type: Number,
    default: 0,
  },

  // images: {
  //   public_id: {
  //     type: String,
  //     //   required: true,
  //   },
  //   url: {
  //     type: String,
  //     //   required: true,
  //   },
  // },

  images: [
    {
      public_id: {
        type: String,
        //required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    //  required: [true, "Please add category"],
  },
  stock: {
    type: Number,
    //required: [true, "Please add stock"],
    maxlength: [3, "category cannot exceed 3 characters"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        //  required: true,
      },

      name: {
        type: String,
        // required: true,
      },
      rating: {
        type: Number,
        // required: true,
      },
      comment: {
        type: String,
      },
      time: {
        type: Date,
        default: Date.now(),
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    //  required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productScheme);
