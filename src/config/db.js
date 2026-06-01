const mongoose  = require("mongoose")
require("dotenv").config()

function connectToDB(){

    mongoose.connect(process.env.MONGO_URI)
     .then(()=>{
        console.log("server is conected to DB")
     })
     .catch(err=>{
        console.log("DB Error:", err.message)
        // Exit the server process if the database connection fails
        process.exit(1)
     })
}

module.exports = connectToDB