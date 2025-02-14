const {Router} = require("express");
const courseRouter = Router();

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