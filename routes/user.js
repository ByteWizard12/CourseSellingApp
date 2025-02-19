const {Router } = require("express");
const userRouter = Router();
const {userModel} = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "iamuser";

userRouter.post("/signup" , async( req , res) => {
    const {email , password , firstName  , lastName } = req.body; 
    // TODO : adding zod validation and hash the password so plain text is not stored in the DB , put inside a try catch block
    
    await userModel.create({
        email,
        password,
        firstName,
        lastName
    })

    res.json({
        message  : "Signup succeeded"
    })
});

userRouter.post("/signin" , async( req , res) => {
    const {email , password} = req.body;

    // TODO : Password -> hashed 
    const user = await userModel.findOne({
        email : email,
        password : password
    });

    if(user){
        const token = jwt.sign({
            id : user._id
        } , JWT_USER_PASSWORD);

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

userRouter.post("/purchase" , async( req , res) => {

});


module.exports = {
    userRouter : userRouter
}