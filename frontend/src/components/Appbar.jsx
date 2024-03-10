export default  function Appbar(){
    return (
        <div className="flex justify-between shadow-lg h-20 bg-gray-500 text-white">
            <div className="flex flex-col justify-center h-full ml-4 font-semibold text-xl">
               <img src="https://companieslogo.com/img/orig/PAYTM.NS_BIG.D-d7c46d27.png?t=1636379788" alt="" className="h-8" /> 
            </div>
            <div className="flex">
               
                <div className="flex justify-center flex-col h-full font-medium mr-4">Hello</div>
                <div className="rounded-full h-12 w-12 bg-gray-400 flex justify-center mt-4 mr-4">
                <div  className="flex justify-center ml-4 mt-2 mr-4 text-lg">U</div>
                </div>
            </div>
        </div>
    )
}