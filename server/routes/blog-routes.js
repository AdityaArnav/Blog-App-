const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {getAllBlogs, addBlog} = require("../controllers/blog-controller")

router.get("/", getAllBlogs);
router.post("/addBlog", addBlog)

module.exports = router;