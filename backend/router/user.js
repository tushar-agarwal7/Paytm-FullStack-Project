const express=require("express")
const router=express.Router();
const jwt=require("jsonwebtoken");
const z=require("zod")
const {User, Account}=require("../db")
const {JWT_SECRET}=require("../config");
const { authMiddleware } = require("./middleware");


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
   return res.status(411).json({
        msg:"Email already taken / Incorrect inputs"
    })
  }

   const existingUser=await User.findOne({
    username:req.body.username
   })
   try{

   
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

    //create new account
    await Account.create({
      userId,balance:1+Math.random()*10000
    })

    const token=jwt.sign({
        userId
    },JWT_SECRET)
   return res.json({
        msg:"User Account Created Successfully",
        token:token
    })
  }
    catch (error) {
      return res.status(500).json({ msg: "Error while creating user" });
    }
})


//signin
const signinBody=z.object({
    username:z.string().email(),
    password:z.string(),
})

router.post("/signin",authMiddleware, async(req,res)=>{
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
  return res.status(404).json({
    msg:"Error while logging in"
   })

})



//when user want to change their name, password then this will use
const updateBody=z.object({
  password:z.string(),
  firstName:z.string(),
  lastName:z.string()
})

router.put("/",authMiddleware,async(req,res)=>{
   const {success}=updateBody.safeParse(req.body);
  if(!success){
      res.status(411).json({
          msg:"Error while updating information"
      })
  }
  await User.updateOne({_id:req.userId},req.body)

  res.json({
      msg:"Updated successfully"
  })
})


//for search
router.get("/bulk",async(req,res)=>{
  const filter=req.query.filter || " ";

  const users=await User.find({
      $or:[{
          firstName:{
              "$regex": filter
         }
  },
  {
      lastName:{
           "$regex": filter
      }
  }]
})
res.json({
  user:users.map(user=>({
  username:user.username,
  firstName:user.firstName,
  lastName:user.lastName,
  _id:user._id

     }))
  })
})

module.exports=router;
