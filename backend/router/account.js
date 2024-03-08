const express=require("express");
const { Account } = require("../db");
const { authMiddleware } = require("../middleware");
const { default: mongoose } = require("mongoose");
const router=express.Router();



router.get("/balance",authMiddleware, async(req,res)=>{
    const account= await Account.findOne({
        userId:req.userId
    })

    res.json({
        balance:account.balance
    })

})


router.post("/transfer", authMiddleware, async(req,res)=>{
      const session=await mongoose.startSession();

      session.startTransaction();
       const {amount,to}=req.body;

       const account=await Account.findOne({userId:req.userId}).session(session)

       if(account.balance<amount){
        await session.abortTransaction()
          return res.status(400).json({
            msg:"Insufficient balance "
          })
       }
  
       const toAccount=await Account.findOne({userId:to }).session(session)
       if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            msg:"invalid account"
        })
       }


           //update sender account
       await Account.updateOne({userId:req.userId},
        {$inc:{balance:-amount} })

        //update reciever account
       await Account.updateOne({userId:to},
        {$inc:{ balance:amount} })



       await session.commitTransaction();
     res.json({
        msg:"Transfer successfully"
     })
       
})


module.exports=router

