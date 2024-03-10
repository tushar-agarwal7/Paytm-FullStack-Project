import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin(){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    return(
        <div  className="flex justify-center h-screen bg-gray-100">
            <div className="flex justify-center flex-col">
                <div className="bg-gray-300 text-center rounded-lg w-100  p-10 h-max px-4">
                <Heading label={"Sign In"}/>
                <SubHeading label={"Enter the credentials to access your account"}/>
                <InputBox onChange={e=>{
                    setUsername(e.target.value)
                }} label={"Email"} placeholder={"tushar123@gmail.com"} />
                <InputBox onChange={e=>{
                    setPassword(e.target.value)
                }} label={"Password"} placeholder={""}/>
                <Button onClick={()=>{
                    axios.post("http://localhost:3000/api/v1/user/signin",{
                        username,password
                    })
                    navigate("/")
                }} label={"Sign In"}/>
                <BottomWarning label={"Don't have an account? "} link={"Sign Up"} to={"/signup"}/>
            </div>
            </div>
        </div>
    )
}