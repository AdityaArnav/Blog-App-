const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const connection = require("./connection/db.js")
const PORT = process.env.PORT || 3000;

const router = require('./routes/routes');
app.use("/api/user", router);


app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

connection(username,password)