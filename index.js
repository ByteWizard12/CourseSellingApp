const express = required("express");
const app = express();

app.use("/user" , userRouter);
app.use("/course" ,  courseRouter);


app.listen(3000 , () => {
    console.log("Server is running on the port : http://localhost:3000" );
});