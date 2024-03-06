const express=require("express")
const router=express.Router();
const userRouter=require("./user");
const { authMiddleware } = require("./middleware");



router.use("/user",  userRouter)

module.exports=router;