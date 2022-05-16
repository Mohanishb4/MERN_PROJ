const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  createOrder,
  getSingleOrder,
  getAllOrders,
  getAdminAllOrders,
  updateAdminOrder,
  deleteOrder,
} = require("../controller/orderController");

const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, createOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, getAllOrders);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminAllOrders);

router.route("/order/:id").put(isAuthenticatedUser, updateAdminOrder);

router
  .route("/admin/orders/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
