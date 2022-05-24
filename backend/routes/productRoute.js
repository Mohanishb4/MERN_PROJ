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
  getAdminProducts,
} = require("../controller/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/admin/products").get(isAuthenticatedUser, getAdminProducts);

router.route("/admin/product/new").post(isAuthenticatedUser, createProduct);

router.route("/admin/product/:id").put(isAuthenticatedUser, updateProduct);

router.route("/admin/product/:id").delete(isAuthenticatedUser, deleteProduct);

router.route("/products/:id").get(getSingleProduct);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getSingleProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
