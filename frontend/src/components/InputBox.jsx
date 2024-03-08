export default  function InputBox({label,placeholder}){
    return (
        <div className="m-1">
            <div className="font-semibold text-left py-2">
                {label}
            </div>
            <input type="text"  placeholder={placeholder} className="rounded-lg border-solid w-full border border-slate-700 h-10"  />
        </div>
    )
}