import { Router } from "express";
import {
  changeCurrentPassword,
  getUserChannelProfile,
  getWatchHistory,
  loginUser,
  logout,
  refreshToken,
  registerUser,
  updateAccountDetails,
  updateAvatarImage,
  updateCoverImage,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT, logout);

router.route("/refresh-token").post(refreshToken);

router.route("/change-password").post(verifyJWT, changeCurrentPassword);

router.route("/update-account").patch(updateAccountDetails);

router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateAvatarImage);

router
  .route("/cover-image")
  .patch(verifyJWT, upload.single("coverImage"), updateCoverImage);

router.route("/c/:username").get(verifyJWT, getUserChannelProfile);
router.route("/history").get(verifyJWT, getWatchHistory);
export default router;
