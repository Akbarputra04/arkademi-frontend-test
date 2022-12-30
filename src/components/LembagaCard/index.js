const index = ({logo, text, className}) => {
    return (
        <div className={`px-3 py-4 bg-white rounded-md shadow-md flex flex-col gap-2 justify-center items-center ${className}`}>
            <img src={logo} alt={text} className="w-9 h-9 md:h-14 md:w-14 rounded-full" />
            <span className="font-semibold text-[6px] md:text-[10px] text-center">{text}</span>
        </div>
    )
}

export default index