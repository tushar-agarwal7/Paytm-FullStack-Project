const express = require("express");
const app=express();
const rootRouter=require("./router/index");
const port=8080;
app.use(express());

app.use("/",rootRouter);

app.listen(port,()=>{
    console.log("app is listining on port 8080")
})