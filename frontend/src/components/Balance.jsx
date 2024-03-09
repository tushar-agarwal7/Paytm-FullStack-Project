import { useEffect, useState } from "react"
import axios from "axios"

export default  function Balance (){
    const [balance,setBalance]=useState(0)
    useEffect(() => {
      axios.get("http://localhost:3000/api/v1/account/balance" ,{
      headers:{
        Authorization:"Bearer " +localStorage.getItem("token")
    }})
            .then(response => {
                setBalance(response.data.balance)
                console.log(response.data.balance)
            })
    }, [])
    return (

        <div className="flex mt-6">
            <div className="font-bold text-lg"> Your Balance</div>
            <div className="font-semibold ml-4 text-lg">Rs {balance.toFixed(2)}</div>
        </div>
       
        
    )
}