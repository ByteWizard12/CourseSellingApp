const express = required("express");
const app = express();


app.post("/user/signup" , async( req , res) => {
    res.json({
        message :"signupendpoint"
    });
});

app.post("/user/signin" , async( req , res) => {
    res.json({
        message : "signinendpoint"
    });
});

app.post("/user/purchase" , async( req , res) => {

});

app.get("/course/purchase" , async( req , res) => {

});

app.get("/course/preview" , async( req , res) => {

});



app.listen(3000 , () => {
    console.log("Server is running on the port : http://localhost:3000" );
});