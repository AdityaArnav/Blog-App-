const mongoose = require("mongoose");

const connection = async (username, password)=>{
    const link = `mongodb+srv://${username}:${password}@cluster0.bayajhl.mongodb.net/?retryWrites=true&w=majority`
try{
    await mongoose.connect(link, {useNewUrlParser: true});
    console.log("database connected to server")

}catch(err){
console.log("database not connected", err)
}
}

module.exports = connection;