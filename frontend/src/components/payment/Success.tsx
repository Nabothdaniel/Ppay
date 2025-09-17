import { FaCheckCircle, FaArrowLeft, } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import paymentBanner from "../../assets/img/ppay-bg.png";
import { FaAnglesDown } from "react-icons/fa6";

const Success = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const date = new Date().toLocaleString();

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 py-8 bg-cover bg-center"
      style={{ backgroundImage: `url('${paymentBanner}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Receipt */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden pb-6">
        {/* "Cut-out" holes */}
        <div className="absolute top-1/2 -left-3 w-6 h-6 bg-black/50 rounded-full"></div>
        <div className="absolute top-1/2 -right-3 w-6 h-6 bg-black/50 rounded-full"></div>

        {/* Header */}
        <div className="text-center border-b border-dashed border-gray-300 p-6">
          <FaCheckCircle className="mx-auto text-emerald-600 text-5xl mb-2" />
          <h2 className="text-xl font-bold text-gray-900">Payment Receipt</h2>
          <p className="text-xs text-gray-500">{date}</p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Transaction ID</span>
            <span className="font-mono">{state?.txId || "N/A"}</span>
          </div>
          <div className="flex justify-between border-t border-dashed pt-2">
            <span className="text-gray-600">Phone Number</span>
            <span className="font-medium">{state?.phone || "Recipient"}</span>
          </div>
          <div className="flex justify-between border-t border-dashed pt-2">
            <span className="text-gray-600">Network</span>
            <span className="font-medium">{state?.network || "N/A"}</span>
          </div>
          <div className="flex justify-between border-t border-dashed pt-2">
            <span className="text-gray-600">Data Plan</span>
            <span className="font-medium">{state?.amount || "N/A"}</span>
          </div>
          <div className="flex justify-between border-t border-dashed pt-2">
            <span className="font-semibold">Amount Paid</span>
            <span className="font-bold text-emerald-600">
              ₦{state?.price || "0"}
            </span>
          </div>
        </div>

        {/* Footer strip */}
        <div className="text-center border-t border-dashed border-gray-300 p-4 text-xs text-gray-500">
          Thank you for your purchase with Ppay
        </div>

        {/* Buttons inside receipt */}
        <div className="mt-6 space-y-3 px-6">
          <button className="flex items-center justify-center gap-2 w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-emerald-700 transition">
            <FaAnglesDown /> Download Receipt
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-100 transition"
          >
            <FaArrowLeft /> Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
