const express = required("express");
const app = express();


createUserRoutes(app);
createCourseRoutes(app);



app.listen(3000 , () => {
    console.log("Server is running on the port : http://localhost:3000" );
});