import { useState } from "react"
import Button from "./Button"


export default  function Users(){
    const [users,setUsers]=useState([
        {
        firstName:"Tushar",
        lastName:"Gupta",
        _id:1
    },
    {
        firstName:"Tushar",
        lastName:"Gupta",
        _id:1
    },
    {
        firstName:"Tushar",
        lastName:"Gupta",
        _id:1
    },
    {
        firstName:"Tushar",
        lastName:"Gupta",
        _id:1
    },
    {
        firstName:"Tushar",
        lastName:"Gupta",
        _id:1
    },    {
        firstName:"Tushar",
        lastName:"Gupta",
        _id:1
    },
])

    return(
        <div className="shadow-2xl bg-gray-200">
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div>
      <input type="text"placeholder="Search users..." className="w-full border  rounded border-slate-400 py-1 px-2 mt-2" />
        </div>
        <div>
            {users.map(user=>
                <User user={user}/>
            )}
        </div>
        </div>
    )
}

function User({user}){
    return <div className="flex justify-between bg-slate-50 mt-4">
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
            <Button label={"Send Money"}/>
        </div>
    </div>
}