import {Router} from 'express';
import {upload} from '../middlewares/multer.middleware.js';
import {verifyJWT} from '../middlewares/auth.middleware.js';
import {addProperty, filterProperty, getAllProperty, getPropertyById, getTypeProperty, removeProperty} from '../controllers/property.controller.js';

const router = Router()

router.route("/").get(getAllProperty)
router.route("/filter").get(filterProperty)
router.route("/:propertyType").get(getTypeProperty)
router.route("/property/:propertyId").get(verifyJWT,getPropertyById)
router.route("/add-property").post(verifyJWT,
    upload.fields([
        {
          name: "image1",
          maxCount: 1,
        },
        {
          name: "image2",
          maxCount: 1,
        },
      ]),
        addProperty
    )
router.route("/del-property/:propertyId").delete(verifyJWT,removeProperty)


export default router