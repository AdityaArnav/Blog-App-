const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true
    }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog
