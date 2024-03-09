import { useEffect, useState } from "react"
import Button from "./Button"
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default  function Users(){
    const [users,setUsers]=useState([]) 
    const [filter,setFilter]=useState("")

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return(
        <div className="shadow-2xl bg-gray-200">
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div>
      <input onChange={(e)=>{
        setFilter(e.target.value)
      }} type="text"placeholder="Search users..." className="w-full border  rounded border-slate-400 py-1 px-2 mt-2" />
        </div>
        <div>
            {users.map(user=>
                <User key={user._id} user={user}/> )}
        </div>
        </div>
    )
}

function User({user}){
    const navigate = useNavigate();
    return <div className="flex justify-between bg-slate-50 mt-4 ml-4 mr-4">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-gray-400  text-white flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center">
            <Button onClick={(e)=>{
            navigate("/sendmoney?id="+user._id +"&name=" +user.firstName)
            }} label={"Send Money"}/>
        </div>
    </div>
}