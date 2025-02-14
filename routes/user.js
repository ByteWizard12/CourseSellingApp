const {Router } = require("express");
const userRouter = Router();

userRouter.post("/signup" , async( req , res) => {
    res.json({
        message :"signupendpoint"
    });
});

userRouter.post("/signin" , async( req , res) => {
    res.json({
        message : "signinendpoint"
    });
});

userRouter.post("/purchase" , async( req , res) => {

});


module.exports = {
    userRouter : userRouter
}