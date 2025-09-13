import { FaArrowLeft, FaFire } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotPlans = () => {
  const hotPlans = [
    { amount: '1GB', price: '#500', cashback: '#18', popular: true },
    { amount: '2GB', price: '#800', cashback: '#25', popular: true },
    { amount: '5GB', price: '#1500', cashback: '#50', popular: false },
    { amount: '10GB', price: '#2500', cashback: '#80', popular: true },
    { amount: '15GB', price: '#3500', cashback: '#120', popular: false },
    { amount: '20GB', price: '#4500', cashback: '#150', popular: true },
  ];

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
        <div className="bg-black px-4 py-3 flex items-center">
          <Link to="/data-plans" className="mr-4">
            <FaArrowLeft className="text-white text-xl" />
          </Link>
          <div className="flex items-center">
            <FaFire className="text-red-500 mr-2" />
            <h1 className="text-white font-medium">Hot Deals</h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">🔥 Limited Time Offers</h2>
            <p className="text-gray-600 text-sm">Best value data plans with maximum cashback</p>
          </div>

          <div className="grid gap-4">
            {hotPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-xl p-4 shadow-lg border-2 ${plan.popular ? 'border-red-400' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-2 left-4">
                    <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full flex items-center">
                      <FaFire className="mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{plan.amount}</div>
                    <div className="text-gray-600 text-lg font-medium">{plan.price}</div>
                  </div>
                  
                  <div className="text-right">
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                      {plan.cashback} Cashback
                    </div>
                    <Link 
                      to={`/payment?amount=${plan.amount}&price=${plan.price}`}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotPlans;