const express=require("express")
const router=express.Router();
const userRouter=require("./user");
const { authMiddleware } = require("./middleware");
const z=require("zod");
const { User } = require("../db");


router.use("/user",  userRouter)



module.exports=router;