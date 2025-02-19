const {Router} = require("express");
const adminRouter = Router();
const {adminModel} = require("../db");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "iamadmin";


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

adminRouter.post("/course" , async(req , res) => {

})
adminRouter.put("/course" , async(req , res) => {

})
adminRouter.get("/course/bulk" , async(req , res) => {

})

module.exports = {
    adminRouter : adminRouter
} 