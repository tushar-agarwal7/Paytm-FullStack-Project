import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

export default function Signin(){
    return(
        <div  className="flex justify-center h-screen bg-gray-100">
            <div className="flex justify-center flex-col">
                <div className="bg-white text-center rounded-lg w-100  p-10 h-max px-4">
                <Heading label={"Sign In"}/>
                <SubHeading label={"Enter the credentials to access your account"}/>
                <InputBox label={"Email"} placeholder={"tushar123@gmail.com"} />
                <InputBox label={"Password"} placeholder={""}/>
                <Button label={"Sign In"}/>
                <BottomWarning label={"Don't have an account? "} link={"Sign Up"} to={"/signup"}/>
            </div>
            </div>
        </div>
    )
}