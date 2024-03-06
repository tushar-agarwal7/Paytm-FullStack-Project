const express=require("express")
const router=express.Router();
const jwt=require("jsonwebtoken");
const z=require("zod")
const {User}=require("../db")
const {JWT_SECRET}=require("../config")


//signup
const signupBody=z.object({
    username: z.string().email(),
    firstName:z.string(),
    lastName:z.string(),
    password:z.string()
  });

router.post("/signup",async(req,res)=>{
     
  const {success}=signupBody.safeParse(req.body);

  if(!success){
   return res.status(411),json({
        msg:"Email already taken / Incorrect inputs"
    })
  }

   const existingUser=await User.findOne({
    username:req.body.username
   })
   if(existingUser){
return res.status(411).json({
        msg:"Email already taken / Incorrect inputs"
    })
   }
   const user=await User.create({
     username:req.body.username,
     firstName:req.body.firstName,
     lastName:req.body.lastName,
     password:req.body.password
   })
    const userId=user._id;
    const token=jwt.sign({
        userId
    },JWT_SECRET)
   return res.json({
        msg:"User Account Created Successfully",
        token:token
    })
})


//signin
const signinBody=z.object({
    username:z.string().email(),
    password:z.string(),
})

router.post("/signin",async(req,res)=>{
      const {success}=signinBody.safeParse(req.body);
      if(!success){
        res.status(411).json({
            msg:"Incorrect Inputs"
        })
      }
      const user=await User.findOne({
        username:req.body.username,
        password:req.body.password
      })
   
   if(user){
    const token=jwt.sign({
      userId:user._id
    },JWT_SECRET)
      res.status(200).json({
        token:token
      })
      return;
   }
   res.status(411).json({
    msg:"Error while logging in"
   })

})

module.exports=router;
