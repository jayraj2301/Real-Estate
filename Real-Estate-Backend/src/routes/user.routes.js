import {Router} from 'express';
import {verifyJWT} from '../middlewares/auth.middleware.js';
import {login, logout, signin, updateUserDetails,getUser,userProperties} from '../controllers/user.controller.js';

const router = Router()

router.route("/getUser").get(verifyJWT,getUser)
router.route("/register").post(signin)
router.route("/login").post(login)
router.route("/logout").get(verifyJWT, logout)
router.route("/update-user").patch(verifyJWT,updateUserDetails)
router.route("/user-property").get(verifyJWT,userProperties)

export default router