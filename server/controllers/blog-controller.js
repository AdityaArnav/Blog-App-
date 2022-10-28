const Blog = require("../model/Blog");

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
const blog = new Blog({
    title,
    description,
    image,
    user
})
try{
    await blog.save()

}catch(err){
    console.log(err);
}
if(!blog){
    res.status(404).json({message:"No blog added"})
}
return res.status(200).json({blog})
}

module.exports = {getAllBlogs, addBlog}