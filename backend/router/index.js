const express=require("express")
const router=express.Router();
const userRouter=require("./user");
const { authMiddleware } = require("./middleware");
const z=require("zod");
const { User } = require("../db");
const accountRouter=require("./account")

router.use("/user",  userRouter)
router.use("/account",accountRouter)


module.exports=router;