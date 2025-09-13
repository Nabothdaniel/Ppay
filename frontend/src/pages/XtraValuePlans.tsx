import { FaArrowLeft, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const XtraValuePlans = () => {
  const xtraValuePlans = [
    { amount: '50GB', price: '#8000', duration: '60 days', savings: '#4000' },
    { amount: '100GB', price: '#15000', duration: '90 days', savings: '#10000' },
    { amount: '200GB', price: '#25000', duration: '120 days', savings: '#20000' },
    { amount: '500GB', price: '#50000', duration: '180 days', savings: '#50000' },
    { amount: '1TB', price: '#80000', duration: '365 days', savings: '#100000' },
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
            <FaStar className="text-yellow-400 mr-2" />
            <h1 className="text-white font-medium">XtraValue Plans</h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">⭐ Premium Long-Term Plans</h2>
            <p className="text-gray-600 text-sm">Maximum savings for extended periods</p>
          </div>

          <div className="grid gap-4">
            {xtraValuePlans.map((plan, index) => (
              <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 shadow-lg border-2 border-yellow-300">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{plan.amount}</div>
                    <div className="text-gray-600 text-lg font-medium">{plan.price}</div>
                    <div className="text-yellow-600 text-sm font-medium">{plan.duration}</div>
                  </div>
                  
                  <div className="text-right">
                    <div className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full mb-2">
                      Save {plan.savings}
                    </div>
                    <Link 
                      to={`/payment?amount=${plan.amount}&price=${plan.price}`}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Get Plan
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-2 text-center">
                  <span className="text-xs text-gray-600">Long-term commitment • Best value</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default XtraValuePlans;