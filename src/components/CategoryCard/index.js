const index = ({icon, text}) => {
    return (
        <div className="w-full px-2.5 py-3.5 md:px-3 md:py-4 flex md:flex-col gap-2 md:justify-center items-center bg-white rounded-md shadow-lg">
            <img src={icon} alt={text} className="w-[40px] md:w-[60px]" />
            <span className="font-semibold text-[12px] md:text-[10px]">{text}</span>
        </div>
    )
}

export default index