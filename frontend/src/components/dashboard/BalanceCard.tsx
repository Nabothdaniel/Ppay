import { RxCountdownTimer } from "react-icons/rx";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiMoneyWithdraw } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { PiBankBold } from "react-icons/pi";

import NairaIcon from "../ui/NairaIcon";

import backgroundBanner from "../../assets/img/background.jpg";

const BalanceCard = () => {
  return (
    <div
      className="relative rounded-2xl px-4 pt-6 pb-20 text-white mb-16 bg-cover bg-center shadow-md"
      style={{
        backgroundImage: `url(${backgroundBanner})`,
      }}
    >
      {/* Balance and History */}
      <div className="flex justify-between">
        <div>
          <div className="text-2xl font-bold inline-flex gap-1 items-center">
            <NairaIcon classes="text-white w-7 h-7" /> 12,890.50
          </div>
          <div className="text-emerald-100 text-sm">Main Balance</div>
        </div>
        <div className="flex items-center space-x-2 text-emerald-100">
          <RxCountdownTimer className="text-lg" />
          <span>History</span>
          <IoIosArrowRoundForward className="text-sm w-5 h-5" />
        </div>
      </div>

      {/* Send To Section */}
      <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-[90%]">
        <div className="bg-white rounded-xl px-4 py-6 shadow-lg">
          <div className="grid grid-cols-4 gap-5 justify-items-center">
            {/* Add Money */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-md">
                <AiOutlinePlus className="text-white text-lg" />
              </div>
              <span className="text-[10px] text-gray-700 font-medium whitespace-nowrap">
                Add Money
              </span>
            </div>

            {/* Open Account */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                <BiWallet className="text-emerald-700 text-lg" />
              </div>
              <span className="text-[10px] text-gray-700 font-medium whitespace-nowrap">
                Open Account
              </span>
            </div>

            {/* Other Banks */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                <PiBankBold className="text-emerald-700 text-lg" />
              </div>
              <span className="text-[10px] text-gray-700 font-medium whitespace-nowrap">
                Other Banks
              </span>
            </div>

            {/* Withdraw */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                <BiMoneyWithdraw className="text-emerald-700 text-lg" />
              </div>
              <span className="text-[10px] text-gray-700 font-medium whitespace-nowrap">
                Withdraw
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
