const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller");
const category = adminController.category;
const post = adminController.post;

router.get('/', (req, res) => {
    res.send('Admin Home');
    console.log("Admin Home");
})

router.get('/add-category/:categoryName', category);
router.post('/image', post);

module.exports = router