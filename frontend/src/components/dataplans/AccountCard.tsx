import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";

const AccountCard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("*131#");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); 
  };

  return (
    <div className="bg-gradient-to-r from-emerald-700 to-emerald-500 rounded-xl p-4 text-white mb-6">
      <div className="flex justify-between items-center">
        {/* Info */}
        <div>
          <div className="text-base font-bold">*131#</div>
          <div className="text-emerald-100 text-xs">
            Check Data balance by dialing *131#, Thank you for choosing us
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="bg-emerald-600 px-3 py-1.5 rounded-md flex items-center space-x-1 text-xs active:scale-95 transition"
        >
          <IoCopyOutline className="text-sm" />
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
};

export default AccountCard;
