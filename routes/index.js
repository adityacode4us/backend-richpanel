import express from "express";
import {
  registerController,
  loginController,
  accessController,
  fetchAllProducts,
  addProduct,
  fetchSingleProduct,
  paymentController,
  getPublishKey,
  addSubscriptions,
  cancelSubscriptions,
  isUserSubscribed,
} from "../controllers";
// import addProduct from '../controllers/products/addProducts';
import fetchUser from "../middlewares/fetchUser";

const router = express.Router();

router.post("/register", registerController.register);
router.post("/login", loginController.login);
router.post("/access", fetchUser, accessController.access);
router.get("/fetchAllProducts", fetchUser, fetchAllProducts.fetchAllProducts);
router.get(
  "/fetchSingleProduct",
  fetchUser,
  fetchSingleProduct.fetchSingleProduct
);
router.post("/paymentStripe", paymentController.payment);

router.post("/addProducts", fetchUser, addProduct.addProduct);
router.get("/getPublishKey", getPublishKey.publishKey);
router.post("/addSubscription", fetchUser, addSubscriptions.addSubscription);
router.delete(
  "/cancelSubscriptions",
  fetchUser,
  cancelSubscriptions.cancelSubscription
);
router.get("/isUserSubscribed", fetchUser, isUserSubscribed.isUserSubscribe);

export default router;
