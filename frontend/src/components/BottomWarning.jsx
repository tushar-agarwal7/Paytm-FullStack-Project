import { Link } from "react-router-dom";

export default  function BottomWarning({label,link,to}){
    return (
        <div className="flex justify-center ">
        <div>
        {label}
        </div>
      <Link className="underline cursor-pointer pl-1" to={to}>
      {link}
      </Link>
        </div>

    )
}