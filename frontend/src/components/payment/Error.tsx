import { FaTimesCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center p-6 relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 text-red-700 font-medium hover:underline"
      >
        Go Home
      </button>

      <FaTimesCircle className="text-red-600 text-6xl mb-4" />
      <h1 className="text-2xl font-bold text-red-700">Payment Failed!</h1>
      <p className="text-gray-600 mt-2">Something went wrong. Please try again.</p>

      {state && (
        <div className="bg-white shadow-md rounded-xl p-6 mt-6 text-left w-full max-w-sm space-y-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Attempted Payment</h2>
          <p><b>Transaction ID:</b> {state.txId}</p>
          <p><b>Network:</b> {state.network}</p>
          <p><b>Phone:</b> {state.phone}</p>
          <p><b>Plan:</b> {state.amount}</p>
          <p><b>Price:</b> ₦{state.price}</p>
        </div>
      )}

      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
