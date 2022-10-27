
const express = require("express");
const router = express.Router(); 
const getAllUser = require("../controllers/userController")

router.get('/', getAllUser);
router.post('/signup')
    module.exports = router;