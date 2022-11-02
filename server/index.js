const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const cors = require('cors');
app.use(cors());

const connection = require("./connection/db.js")
const PORT = process.env.PORT || 3000;

const user_router = require('./routes/user-routes');
app.use("/api/user", user_router);

const blog_router = require("./routes/blog-routes");
app.use("/api/blog", blog_router)



app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

connection(username,password)