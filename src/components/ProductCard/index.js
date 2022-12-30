import { BsStarFill } from 'react-icons/bs';
import thumbnail from '../../assets/thumbnail.png';

const index = () => {
    return (
        <div className="flex-shrink-0 w-[231px] rounded-lg bg-white shadow-lg">
            <img src={thumbnail} alt="card thumbnail" className="rounded-t-lg" />
            <div className="p-4">
              <h5 className="font-bold text-[10px] text-[#ACAEB2] mb-1.5">Arkademi</h5>
              <h3 className="font-bold text-xs mb-2.5">Membuat Landing Page bagi Desainer Website</h3>
              <div className="flex items-center gap-1 mb-3.5">
                <BsStarFill size={10} color="#F7DE06" />
                <span className="font-bold text-[11px] text-[#3E3F43]">4.5</span>
                <span className="font-medium text-[11px] text-[#3E3F43]">(>1000)</span>
              </div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="px-1 py-0.5 rounded bg-[#FFE0E0] font-extrabold text-[10px] text-[#F94759]">30%</div>
                <span className="font-medium text-[10px] text-[#ACAEB2] line-through">Rp 320.000</span>
              </div>
              <h4 className="font-extrabold text-base">Rp 280.000</h4>
            </div>
        </div>
    )
}

export default index