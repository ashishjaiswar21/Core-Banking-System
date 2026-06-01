const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")

const tokenBlackListedModel = require("../models/blackList.model")


async function authMiddleware(req,res,next){ 
    
    const token =req.cookies.token || req.headers.authorization?.split(" ")[1]

    if(!token){
        return  res.status(401).json({
            message:"Unauthorized access ,token is missing"
        })
    }
     const isTokenBlackListed = await tokenBlackListedModel.findOne({token})

    if(isTokenBlackListed) {
        return res.status(401).json({
            message: "Unauthorized access, token is invalid"
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.id)
        if (!user) {
        return res.status(401).json({
            message: "User not found in the database"
        });
    }
        req.user = user

        return next()
    }

    catch(err){
        console.log("Middleware Error Details:", err);
        return  res.status(401).json({
            message:"Unauthorized access ,token is missing"
        })
    }
}
async function authSystemUserMiddleware(req,res,next) {
    
    const token =req.cookies.token || req.headers.authorization?.split(" ")[1]

    if(!token){
        return  res.status(401).json({
            message:"Unauthorized access ,token is missing"
        })
    }
    const isTokenBlackListed = await tokenBlackListedModel.findOne({token})

    if(isTokenBlackListed) {
        return res.status(401).json({
            message: "Unauthorized access, token is invalid"
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.id).select("+systemUser")
        if (!user || !user.systemUser) {
        return res.status(401).json({
            message: "User not found in the database"
        });
    }
        req.user = user

        return next()
    }

    catch(err){
        console.log("Middleware Error Details:", err);
        return  res.status(401).json({
            message:"Unauthorized access ,token is missing"
        })
    }
}



module.exports = {
    authMiddleware,
    authSystemUserMiddleware
}