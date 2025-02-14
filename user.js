function createUserRoutes(app){
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
}