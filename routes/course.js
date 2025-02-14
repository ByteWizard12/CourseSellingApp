const {Router} = require("express");
const courseRouter = Router();

courseRouter.get("/course/purchase" , async( req , res) => {

});

courseRouter.get("/course/preview" , async( req , res) => {

});


module.exports = {
    createCourseRoutes : createCourseRoutes
}