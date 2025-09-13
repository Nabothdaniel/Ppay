import { FaArrowLeft, FaCreditCard, FaWallet, FaCheckCircle } from 'react-icons/fa';
import { Link, useSearchParams } from 'react-router-dom';

const Payment = () => {
  const [searchParams] = useSearchParams();
  const amount = searchParams.get('amount') || '1GB';
  const price = searchParams.get('price') || '#500';

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-sm mx-auto bg-white min-h-screen relative">
        {/* Status Bar */}
        <div className="bg-black text-white px-4 py-2 flex justify-between items-center text-sm">
          <span>7:13:48 PM</span>
          <div className="flex items-center space-x-1">
            <span>658 4G+1</span>
            <span>Vo 4G</span>
            <span>100%</span>
          </div>
        </div>

        {/* Header */}
        <div className="bg-black px-4 py-3 flex justify-between items-center">
          <Link to="/data-plans">
            <FaArrowLeft className="text-white text-xl" />
          </Link>
          <h1 className="text-white font-medium">Payment</h1>
          <div></div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Purchase Summary */}
          <div className="bg-white rounded-xl p-6 shadow-lg border mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Purchase Summary</h2>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Data Plan</span>
              <span className="font-medium">{amount}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Price</span>
              <span className="font-medium">{price}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Cashback</span>
              <span className="text-emerald-600 font-medium">#18</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between items-center">
              <span className="font-bold">Total</span>
              <span className="font-bold text-lg">{price}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <h3 className="text-gray-900 font-medium mb-4">Payment Method</h3>
            
            <div className="space-y-3">
              <div className="flex items-center p-4 border border-emerald-500 bg-emerald-50 rounded-lg">
                <FaWallet className="text-emerald-600 mr-3" />
                <div className="flex-1">
                  <div className="font-medium">Wallet Balance</div>
                  <div className="text-sm text-gray-600">#12,890.50 Available</div>
                </div>
                <FaCheckCircle className="text-emerald-600" />
              </div>

              <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                <FaCreditCard className="text-gray-400 mr-3" />
                <div className="flex-1">
                  <div className="font-medium text-gray-700">Card Payment</div>
                  <div className="text-sm text-gray-500">Pay with debit/credit card</div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <h3 className="text-gray-900 font-medium mb-3">Phone Number</h3>
            <div className="flex items-center p-3 border border-gray-200 rounded-lg">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-600 text-sm">👤</span>
              </div>
              <span className="text-gray-900 font-medium">091 3716 9644</span>
            </div>
          </div>

          {/* Continue Button */}
          <button className="w-full bg-emerald-500 text-white py-4 rounded-lg font-medium text-lg hover:bg-emerald-600 transition-colors">
            Continue Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;