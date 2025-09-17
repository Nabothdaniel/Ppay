import { useSearchParams, useNavigate } from "react-router-dom";
import { FaCreditCard, FaWallet, FaCheckCircle } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { telcoLogos } from "../constants/telecos";
import { formatCurrency } from "../utils/helperFns";
import backgroundBanner from "../assets/img/background.jpg";
import { useAirtimeStore } from "../zustand/airtimestore";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { phone, hasPin } = useAirtimeStore();

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
              <span className="text-gray-900 font-medium">
                {phone || "Not provided"}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={() => {
              if (!phone) {
                alert("Please provide a phone number before proceeding.");
                return;
              }
              if (!hasPin) {
                navigate("/setup-pin");
              } else {
                navigate("/confirm-payment", {
                  state: { txId, amount, price, cashback, network, phone },
                });
              }
            }}
            className="w-full bg-emerald-500 text-white py-3 rounded-xl font-medium text-lg hover:bg-emerald-600 transition"
          >
            Continue Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
