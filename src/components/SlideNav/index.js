import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const index = ({position, className}) => {
    return (
        position === "left" ? (
            <button className={`absolute top-[50%] -translate-y-1/2 left-[-12px] w-8 h-8 bg-white flex justify-center items-center rounded-full shadow-xl ${className}`}>
                <BsChevronLeft/>
            </button>
        ) : (
            <button className={`absolute top-[50%] -translate-y-1/2 right-[-12px] w-8 h-8 bg-white flex justify-center items-center rounded-full shadow-xl ${className}`}>
                <BsChevronRight/>
            </button>
        )
    )
}

export default index