const {Router} = require("express");
const adminRouter = Router();
const {adminModel} = require("../db");


adminRouter.post("/signup" , async( req , res) => {
    
});

adminRouter.post("/signin" , async( req , res) => {
    res.json({
        message : "signinendpoint"
    });
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