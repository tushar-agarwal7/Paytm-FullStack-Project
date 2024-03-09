export default  function InputBox({label,placeholder,onChange}){
    return (
        <div className="m-1">
            <div className="font-semibold text-left py-2">
                {label}
            </div>
            <input onChange={onChange} type="text"  placeholder={placeholder} className="rounded-lg border-solid w-full border border-slate-700 h-10"  />
        </div>
    )
}