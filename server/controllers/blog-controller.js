const mongoose = require("mongoose");
const Blog = require("../model/Blog");
const User = require("../model/User");

const getAllBlogs = async (req, res, next)=>{
let blog;
try{
blog = await Blog.find();
}catch(err){
    console.log(err);
}
if(!blog){
    return res.status(404).json({message:"No blog exists"})
}
return res.status(200).json({blog})
}

const addBlog = async (req, res, next) =>{
const {title, description, image, user} = req.body;
let existingUser;
try{
    existingUser = await User.findById(user)
}catch(err){
    console.log(err);
}

if(!existingUser){
    return res.status(400).json({message:"Unable to find user by this id"})
}
const blog = new Blog({
    title,
    description,
    image,
    user
})
try{
    const session = await mongoose.startSession();
    session.startTransaction()
    await blog.save({session});
    existingUser.blogs.push(blog);
    await existingUser.save({session})
    await session.commitTransaction();
}catch(err){
    console.log(err);
    return  res.status(500).json({message: "error"})
}
return res.status(200).json({blog})
}

const getById = async (req, res, next) =>{
const blogId = req.params.id;
let blog;
try{
    blog= await Blog.findById(blogId)

}catch(err){
    console.log(err);
}
if(!blog){
    return res.status(404).json({message: "No Blog Found"});
}
return res.status(200).json({blog})
}

const updateBlog = async (req, res, next) =>{
    const {title, description, image} = req.body;
const blogId = req.params.id;
let blog;
try{
    
    blog = await Blog.findByIdAndUpdate(blogId, {
        title,
        description,
        image
    })

}catch(err){
    console.log(err);
}
if(!blog){
    return res.status(500).json({message: "Unable to Update the Blog"})
}
return res.status(200).json({blog})
}

const deleteBlog = async (req, res, next) => {
    const blogId = req.params.id;
    let blog;
    try{
        blog = await Blog.findByIdAndDelete(blogId).populate('user')
        await blog.user.blogs.pull(blog);
        await blog.user.save()
    }
    catch(err){
        console.log(err);
    }
    if(!blog){
        return res.status(404).json({message: "Unable to Delete blog"})
    }
    return res.status(200).json({message:"Blog Deleted Successfully", blog})

}

module.exports = { getAllBlogs, addBlog, getById, updateBlog, deleteBlog }