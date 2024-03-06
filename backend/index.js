const express = require("express");
const rootRouter=require("./router/index");
const port=3000;
const cors=require("cors");

const app=express();

app.use(cors())
app.use(express.json());
app.use("/api/v1",rootRouter);

app.listen(port,()=>{
    console.log("app is listining on port 3000")
})