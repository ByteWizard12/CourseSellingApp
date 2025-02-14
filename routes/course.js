const {Router} = require("express");
const courseRouter = Router();
const {courseModel} = require("../db");


courseRouter.get("/purchase" , async( req , res) => {

});

courseRouter.get("/preview" , async( req , res) => {
    res.json({
        message : "All available courses are viewed"
    })
});


module.exports = {
    courseRouter : courseRouter
}