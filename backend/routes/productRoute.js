const exp = require("constants");
const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getSingleProductReviews,
  deleteReview,
} = require("../controller/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/products/new").post(isAuthenticatedUser, createProduct);

router.route("/products/:id").put(isAuthenticatedUser, updateProduct);

router.route("/products/:id").delete(isAuthenticatedUser, deleteProduct);

router.route("/products/:id").get(getSingleProduct);

router.route("/products/review").post(isAuthenticatedUser, createProductReview);

router
  .route("/review")
  .get(isAuthenticatedUser, getSingleProductReviews)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteReview);

module.exports = router;
