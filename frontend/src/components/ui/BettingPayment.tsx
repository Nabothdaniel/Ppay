const BettingPayment = () => {
  return (
    <div className="rounded-xl p-4 mb-6 flex items-center justify-between flex-nowrap overflow-hidden">
      {/* Left Section */}
      <div className="flex items-center space-x-3 min-w-0 flex-1">
        {/* Icon Circle */}
        <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-orange-600 font-bold text-lg">B</span>
        </div>

        {/* Texts */}
        <div className="truncate">
          <div className="font-semibold text-gray-900 truncate">
            Betting Payment
          </div>
          <div className="text-gray-600 text-sm leading-snug truncate">
            Send betting account with{" "}
            <span className="font-medium text-gray-800">₦200+</span> & get{" "}
            <span className="text-emerald-600 font-semibold">5% Cashback</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="ml-4 flex-shrink-0">
        <button className="bg-emerald-500 hover:bg-emerald-600 transition-colors text-white px-6 py-2 rounded-full text-sm font-medium shadow-md whitespace-nowrap">
          Go
        </button>
      </div>
    </div>
  );
};

export default BettingPayment;
