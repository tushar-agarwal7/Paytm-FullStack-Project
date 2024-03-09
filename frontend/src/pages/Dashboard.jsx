import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import Footer from "../components/Footer";

export default function Dashboard(){
    return (
        <div>
       
        <div>
            <Appbar/>
            <Balance/>
            <Users />
        </div>
        <div>
            <Footer/>
        </div>
             
        </div>
     
    )
}