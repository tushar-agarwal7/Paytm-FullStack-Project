const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/paytm2');

//user Schema
const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
})

const bankSchema=new mongoose.Schema({
   balance:{
    type:Number,
    required:true
},
  userId:{
    type:mongoose.Schema.ObjectId,
    ref:'User',
    required:true
}


})

const Account=mongoose.model("Account",bankSchema)
const User=mongoose.model("User",userSchema);

module.exports={
    User,Account
}
console.log("database Connected")