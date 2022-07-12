const express = require("express")
const AppController = require("../controllers/AppController")
const router = express.Router()

router.route("/")
.get(AppController.getHome);


module.exports = router
