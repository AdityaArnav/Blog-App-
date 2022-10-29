const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {getAllBlogs, addBlog, updateBlog, getById, deleteBlog} = require("../controllers/blog-controller")

router.get("/", getAllBlogs);
router.post("/add", addBlog);
router.get("/:id", getById);
router.put("/update/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;