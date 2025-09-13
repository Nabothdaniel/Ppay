import { Link } from "react-router-dom";
import { RiHome6Line, RiSettingsLine } from "react-icons/ri";
import { GoHistory } from "react-icons/go";
import { BsCreditCard2Front } from "react-icons/bs";

export default function BottomNav() {
  return (
    <div className="px-4 pb-6">
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-500  rounded-full shadow-lg flex justify-around py-4">
        {/* Home - Active */}
        <div className="flex flex-col items-center">
          <RiHome6Line className="text-white text-xl mb-1" />
        </div>

        {/* History */}
        <div className="flex flex-col items-center">
          <GoHistory className="text-white/70 text-xl mb-1" />
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center">
          <BsCreditCard2Front className="text-white/70 text-xl mb-1" />
        </div>

        {/* Settings */}
        <Link to="/settings" className="flex flex-col items-center">
          <RiSettingsLine className="text-white/70 text-xl mb-1" />
        </Link>
      </div>
    </div>
  );
}
