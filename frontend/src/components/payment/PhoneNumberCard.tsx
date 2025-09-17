import { RiPhoneFill } from "react-icons/ri";

interface PhoneNumberCardProps {
  phone: string;
}

const PhoneNumberCard = ({ phone }: PhoneNumberCardProps) => {
  return (
    <div>
      <h3 className="text-gray-900 font-semibold mb-3">Phone Number</h3>
      <div className="flex items-center p-3 border border-gray-200 rounded-xl shadow-sm">
        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
          <RiPhoneFill className="text-emerald-600 w-5 h-5" />
        </div>
        <span className="text-gray-900 font-medium">
          {phone || "Not provided"}
        </span>
      </div>
    </div>
  );
};

export default PhoneNumberCard;
