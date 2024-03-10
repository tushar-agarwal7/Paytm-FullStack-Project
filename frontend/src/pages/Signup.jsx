import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Signup(){
   const [firstName,setFirstName]=useState("")
   const [lastName,setLastName]=useState("")
   const [username,setUsername]=useState("")
   const [password,setPassword]=useState("")
   const naviagate=useNavigate()
    return (
        <div className="flex justify-center h-screen bg-gray-100 ">
        <div className="flex justify-center flex-col ">
            <div className="bg-gray-300 text-center  rounded-lg w-100 shadow-xl  p-10 h-max px-4">
          <Heading label={"SignUp"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox onChange={e=>{
            setFirstName(e.target.value)
          }} placeholder={"Tushar"} label={"First Name"} />

          <InputBox onChange={e=>{
            setLastName(e.target.value)
          }} placeholder={"Agarwal"} label={"Last Name"}/>
           
          <InputBox onChange={e=>{
            setUsername(e.target.value)
          }} placeholder={"tushar123@gmail.com"} label={"Email"}/>

          <InputBox onChange={e=>{
            setPassword(e.target.value)
          }} placeholder={"12345678"} label={"Password"}/>

          <Button onClick={async()=>{
    
        const res=  await axios.post("http://localhost:3000/api/v1/user/signup",{
                username,password,firstName,lastName
            })
         
            localStorage.setItem("token",res.data.token)
            naviagate("/")
            
          }} label={"Sign up"}/>
          <BottomWarning label={"Already have an account?"} link={"Sign in"} to={"/signin"}/>
          </div>
          </div>
        </div>
    )
}