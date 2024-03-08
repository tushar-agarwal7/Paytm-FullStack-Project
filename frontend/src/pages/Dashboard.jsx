import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";

export default function Dashboard(){
    return (
        <div>
            <Appbar/>
            <Balance value={"2,00,000"}/>
            <Users/>
        </div>
     
    )
}