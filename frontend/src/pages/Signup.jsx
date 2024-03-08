import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

export default function Signup(){
    return (
        <div className="flex justify-center h-screen bg-gray-100 ">
        <div className="flex justify-center flex-col ">
            <div className="bg-white text-center  rounded-lg w-100 shadow-xl  p-10 h-max px-4">
          <Heading label={"SignUp"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox placeholder={"Tushar"} label={"First Name"} />
          <InputBox placeholder={"Agarwal"} label={"Last Name"}/>
          <InputBox placeholder={"tushar123@gmail.com"} label={"Email"}/>
          <InputBox placeholder={"12345678"} label={"Password"}/>
          <Button label={"Sign up"}/>
          <BottomWarning label={"Already have an account?"} link={"Sign in"} to={"/signin"}/>
          </div>
          </div>
        </div>
    )
}