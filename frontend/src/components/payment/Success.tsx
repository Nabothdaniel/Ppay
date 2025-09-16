import { FaCheckCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6 relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 text-green-700 font-medium hover:underline"
      >
        Go Home
      </button>

      <FaCheckCircle className="text-green-600 text-6xl mb-4" />
      <h1 className="text-2xl font-bold text-green-700">Payment Successful!</h1>
      <p className="text-gray-600 mt-2">Your transaction was completed successfully.</p>

      {state && (
        <div className="bg-white shadow-md rounded-xl p-6 mt-6 text-left w-full max-w-sm space-y-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Payment Summary</h2>
          <p><b>Transaction ID:</b> {state.txId}</p>
          <p><b>Network:</b> {state.network}</p>
          <p><b>Phone:</b> {state.phone}</p>
          <p><b>Plan:</b> {state.amount}</p>
          <p><b>Price:</b> ₦{state.price}</p>
          <p className="font-bold text-green-600">Total: ₦{state.price}</p>
        </div>
      )}
    </div>
  );
};

export default Success;
