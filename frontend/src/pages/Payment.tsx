import { useState } from "react";
import { FaCreditCard, FaWallet, FaCheckCircle } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { useSearchParams, useNavigate } from "react-router-dom";
import { telcoLogos } from "../constants/telecos";
import { formatCurrency } from "../utils/helperFns";
import backgroundBanner from "../assets/img/background.jpg";
import { useAirtimeStore } from "../zustand/airtimestore";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // zustand state
 const { phone, setPhone } = useAirtimeStore();


  // modal states
  const [showConfirm, setShowConfirm] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState("");

  const txId = searchParams.get("txId") || "N/A";
  const amount = searchParams.get("amount") || "N/A";
  const price = searchParams.get("price") || "0";
  const cashback = searchParams.get("cashback") || "0";
  const network = searchParams.get("network") || "Unknown";

  const networkLogos: Record<string, string> = {
    MTN: telcoLogos.MTN,
    Glo: telcoLogos.Glo,
    Airtel: telcoLogos.Airtel,
  };

  // Handle final confirm (after PIN)
  const handleConfirm = () => {
    setShowPin(false);
    setPin("");

    // Simulate API response (success vs error)
    const success = Math.random() > 0.3;
    if (success) {
      navigate("/success", {
        state: { txId, amount, price, cashback, network, phone: phone },
      });
    } else {
      navigate("/error", {
        state: { txId, amount, price, cashback, network, phone: phone },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div
          className="bg-emerald-500 text-white p-6 object-center"
          style={{ backgroundImage: `url(${backgroundBanner})` }}
        >
          <h2 className="text-2xl font-bold">{formatCurrency(price)}</h2>
          <p className="text-sm opacity-90">
            Paid on {new Date().toDateString()}
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Purchase Summary */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Purchase Summary
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Transaction ID</span>
                <span className="font-mono text-xs text-gray-800 whitespace-nowrap truncate max-w-[160px]">
                  {txId}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Network</span>
                <div className="flex items-center gap-2">
                  {networkLogos[network] && (
                    <img
                      src={networkLogos[network]}
                      alt={network}
                      className="w-6 h-6 rounded-full shadow-sm"
                    />
                  )}
                  <span className="font-medium">{network}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Data Plan</span>
                <span className="font-medium">{amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Price</span>
                <span className="font-medium">{formatCurrency(price)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Cashback</span>
                <span className="text-emerald-600 font-medium">
                  {formatCurrency(cashback)}
                </span>
              </div>
              <hr className="text-gray-200" />
              <div className="flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-lg text-emerald-600">
                  {formatCurrency(price)}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Payment Method</h3>
            <div className="space-y-3">
              <div className="flex items-center p-4 border border-emerald-500 bg-emerald-50 rounded-xl shadow-sm">
                <FaWallet className="text-emerald-600 mr-3 text-lg" />
                <div className="flex-1">
                  <div className="font-medium">Wallet Balance</div>
                  <div className="text-xs text-gray-600">
                    {formatCurrency("12890.50")} Available
                  </div>
                </div>
                <FaCheckCircle className="text-emerald-600" />
              </div>
              <div className="flex items-center p-4 border border-gray-200 rounded-xl shadow-sm hover:border-gray-300 transition">
                <FaCreditCard className="text-gray-400 mr-3 text-lg" />
                <div className="flex-1">
                  <div className="font-medium text-gray-700">Card Payment</div>
                  <div className="text-xs text-gray-500">
                    Pay with debit/credit card
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Phone Number</h3>
            <div className="flex items-center p-3 border border-gray-200 rounded-xl shadow-sm">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                <RiPhoneFill className="text-emerald-600 w-5 h-5" />
              </div>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className="flex-1 border-none outline-none text-gray-900 font-medium placeholder-gray-400 bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={() => setShowConfirm(true)}
            className="w-full bg-emerald-500 text-white py-3 rounded-xl font-medium text-lg hover:bg-emerald-600 transition"
            disabled={!phone} // prevent continue if phone is empty
          >
            Continue Payment
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 relative mx-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-900">
              Confirm Purchase
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Please review your purchase details:
            </p>

            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium text-gray-600">Plan:</span> {amount}
              </li>
              <li>
                <span className="font-medium text-gray-600">Price:</span>{" "}
                {formatCurrency(price)}
              </li>
              <li>
                <span className="font-medium text-gray-600">Phone:</span>{" "}
                {phone || "Not provided"}
              </li>
              <li>
                <span className="font-medium text-gray-600">Network:</span>{" "}
                {network}
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowConfirm(false);
                  setShowPin(true);
                }}
                className="flex-1 bg-emerald-500 text-white rounded-lg py-2 hover:bg-emerald-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment PIN Modal */}
      {showPin && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 relative">
            <h2 className="text-lg font-semibold mb-4 text-gray-900">
              Enter Payment PIN
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              For security, enter your 4-digit PIN to proceed.
            </p>

            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              maxLength={4}
              className="w-full border border-gray-300 rounded-lg p-3 text-center text-lg tracking-widest font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="••••"
            />

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowPin(false)}
                className="flex-1 border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                disabled={pin.length < 4}
                onClick={handleConfirm}
                className={`flex-1 rounded-lg py-2 text-white ${
                  pin.length < 4
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-emerald-500 hover:bg-emerald-600"
                }`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
