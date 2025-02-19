const {Router} = require("express");
const adminRouter = Router();
const {adminModel, courseModel} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD}= require("../config");
const { adminMiddleWare } = require("../middleware/admin");


adminRouter.post("/signup" , async( req , res) => {
    const {email , password , firstName  , lastName } = req.body; 
    // TODO : adding zod validation and hash the password so plain text is not stored in the DB , put inside a try catch block
    
    await adminModel.create({
        email,
        password,
        firstName,
        lastName
    })

    res.json({
        message  : "Signup succeeded"
    })
});

adminRouter.post("/signin" , async( req , res) => {
    const {email , password} = req.body;

    // TODO : Password -> hashed 
    const admin = await adminModel.findOne({
        email : email,
        password : password
    });

    if(admin){
        const token = jwt.sign({
            id : admin._id
        } , JWT_ADMIN_PASSWORD);

        res.json({
            token : token
        })
    }
    else{
        res.status(403).json({
            message : "Incorrect Credentials"
        })
    }
});

adminRouter.post("/course" , adminMiddleWare , async(req , res) => {
    req.userId = decoded._id;

    const {title , description , imageUrl , price} = req.body;

    const course = await courseModel.create({
        title : title , description : description , imageUrl : imageUrl, price : price , creatorId : adminId 
    })

    res.json({
        message : "Course created",
        courseId : course._id
    })

})
adminRouter.put("/course" , async(req , res) => {

})
adminRouter.get("/course/bulk" , async(req , res) => {

})

module.exports = {
    adminRouter : adminRouter
} 