const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/CourseSellingApp");
const Schema = mongoose.Schema;

const ObjectId = mongoose
.Types.ObjectId;

const userSchema = new Schema({
    userId : ObjectId,
    email : {type : String , unique : true},
    password : String,
    firstName : String,
    lastName : String
});

const adminSchema= new Schema({
    adminId : ObjectId,
    email : {type : String , unique : true},
    password : String,
    firstName : String,
    lastName  :  String
})

const courseSchema = new Schema({
    courseId : ObjectId,
    title : String,
    description : String,
    price : Number,
    imageURL : String,
    creatorId : ObjectId
})


const purchaseSchema = new Schema({
    purchaseId : ObjectId,
    courseId : ObjectId,
    userId : ObjectId
})

const userModel = mongoose.model("user" , userSchema);
const adminModel = mongoose.model("admin" , adminSchema);
const courseModel = mongoose.model("course" , courseSchema);
const purchaseModel = mongoose.model("purchase" , purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}