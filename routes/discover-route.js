const express = require("express");
const router = express.Router();
const discoverController = require("../controllers/discover-controller");
const like = discoverController.like;
const shuffle = discoverController.shuffle;

router.get("/like/:imageId", like);

router.get("/discover/:category/:shuffle", shuffle);

module.exports = router