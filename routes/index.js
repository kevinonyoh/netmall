const express = require("express")
const AppController = require("../controllers/AppController")
const adminController = require("../controllers/adminController")
const upload = require("../config/multer")



const router = express.Router()

router.route("/")
.get(AppController.getHome);

router.route("/admin-upload")
.get(adminController.getAdminUpload)
.post(upload.single('image'),adminController.postAdminUpload)

router.route("/admin-delete")
.get(adminController.getAdminDeleteProduct)
.post(adminController.postAdminDeleteProduct);

router.route("/product/:id")
.get(AppController.getAproduct);


module.exports = router
