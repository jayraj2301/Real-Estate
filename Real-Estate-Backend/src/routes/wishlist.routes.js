import express from 'express';
import {verifyJWT} from '../middlewares/auth.middleware.js';
import {addToWishList,getWishList,removeFromWishList} from '../controllers/wishlist.controller.js';

const router = express.Router()
router.use(verifyJWT)

router.route("/wishlist").get(getWishList)
router.route("/addToWishlist/:propertyId").post(addToWishList)
router.route("/removeFromWishlist/:wishListId").delete(addToWishList)