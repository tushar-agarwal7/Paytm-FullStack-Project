const express=require("express")
const router=express.Router();
const userRouter=require("./user")

router.get("/",(req,res)=>{
    res.send("hello")
})

router.get("/user",userRouter)
module.exports=router;