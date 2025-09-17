import { useState, useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import mtnLogo from "../../assets/img/mtn-logo.jpeg";
import gloLogo from "../../assets/img/glo-logo.png";
import airtelLogo from "../../assets/img/airtel-logo.png";
import { useAirtimeStore } from "../../zustand/airtimestore";

function getTelcoLogo(phone: string) {
  const cleaned = phone.replace(/\s+/g, "");
  const prefix = cleaned.substring(0, 4);

  const mtnPrefixes = [
    "0803", "0806", "0703", "0706", "0810", "0813", "0814", "0816",
    "0903", "0906", "0913", "0916"
  ];
  const gloPrefixes = ["0805", "0807", "0811", "0815", "0905", "0915"];
  const airtelPrefixes = [
    "0802", "0808", "0708", "0812", "0701", "0902", "0907", "0901", "0912"
  ];

  if (mtnPrefixes.includes(prefix)) return mtnLogo;
  if (gloPrefixes.includes(prefix)) return gloLogo;
  if (airtelPrefixes.includes(prefix)) return airtelLogo;

  return mtnLogo; // fallback (default MTN)
}

interface PhoneNumberProps {
  defaultNumber?: string; // number used to register account
}

const PhoneNumber = ({ defaultNumber = "09137169644" }: PhoneNumberProps) => {
  const { phone, setPhone } = useAirtimeStore(); 
  const [localPhone, setLocalPhone] = useState(phone || defaultNumber);

  const [recentNumbers, setRecentNumbers] = useState<string[]>([
    defaultNumber,
    "08051234567",
    "07081234567",
    "08021234567",
  ]);
  const [isFocused, setIsFocused] = useState(false);

  const telcoLogo = getTelcoLogo(localPhone);

  // keep zustand in sync with local input
  useEffect(() => {
    setPhone(localPhone);
  }, [localPhone, setPhone]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalPhone(e.target.value);
  };

  const handleSelectNumber = (num: string) => {
    setLocalPhone(num);
    setIsFocused(false);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (localPhone && !recentNumbers.includes(localPhone)) {
      setRecentNumbers((prev) => [localPhone, ...prev].slice(0, 4));
    }
  };

  const clearPhone = () => {
    setLocalPhone("");
  };

  const removeRecent = (num: string) => {
    setRecentNumbers((prev) => prev.filter((n) => n !== num));
  };

  // filter recents
  const filteredRecents = recentNumbers.filter((num) =>
    localPhone ? num.startsWith(localPhone) : true
  );

  return (
    <div className="relative mb-6">
      <div className="flex items-center p-3 border border-gray-200 rounded-lg">
        {/* Telco logo */}
        <img
          src={telcoLogo}
          alt="telco"
          className="w-8 h-8 rounded-full object-cover mr-3"
        />

        {/* Phone input */}
        <input
          type="tel"
          value={localPhone}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          placeholder="Enter phone number"
          className="flex-1 outline-none text-gray-900 font-medium bg-transparent"
        />

        {/* Clear input */}
        {localPhone && (
          <FaXmark
            className="text-gray-400 cursor-pointer hover:text-red-500 ml-2 mr-1"
            onClick={clearPhone}
          />
        )}
      </div>

      {/* Dropdown */}
      {isFocused && filteredRecents.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="px-3 py-2 text-xs text-gray-500">Recent</div>
          {filteredRecents.map((num, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <div
                onMouseDown={() => handleSelectNumber(num)}
                className="flex items-center space-x-3"
              >
                <img
                  src={getTelcoLogo(num)}
                  alt="telco"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-gray-800">{num}</span>
              </div>
              {/* remove recent */}
              <FaXmark
                className="text-gray-300 hover:text-red-400 cursor-pointer text-sm"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  removeRecent(num);
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhoneNumber;
