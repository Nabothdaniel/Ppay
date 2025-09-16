import { Link } from "react-router-dom";
import { RiHome5Fill } from "react-icons/ri";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { RiSettings4Fill } from "react-icons/ri";
import { PiClockCounterClockwiseBold } from "react-icons/pi";

export default function BottomNav() {
  return (
    <div className="px-4 pb-6">
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-500 rounded-full shadow-lg flex justify-around items-center py-3 px-2">
        {/* Home - Active */}
        <div className="flex flex-col items-center">
          <RiHome5Fill className="text-white text-xl mb-1" />
          <span className="text-[10px] text-white">Home</span>
        </div>

        {/* History */}
        <div className="flex flex-col items-center">
          <PiClockCounterClockwiseBold className="text-white/70 text-xl mb-1" />
          <span className="text-[10px] text-white/80">History</span>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center">
          <BsFillCreditCard2FrontFill className="text-white/70 text-xl mb-1" />
          <span className="text-[10px] text-white/80">Cards</span>
        </div>

        {/* Settings */}
        <Link to="/settings" className="flex flex-col items-center">
          <RiSettings4Fill className="text-white/70 text-xl mb-1" />
          <span className="text-[10px] text-white/80">Settings</span>
        </Link>
      </div>
    </div>
  );
}
