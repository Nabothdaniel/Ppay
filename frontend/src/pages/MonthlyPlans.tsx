import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MonthlyPlans = () => {
  const monthlyPlans = [
    { amount: '10GB', price: '#3000', duration: '30 days', popular: false },
    { amount: '20GB', price: '#5000', duration: '30 days', popular: true },
    { amount: '40GB', price: '#8000', duration: '30 days', popular: false },
    { amount: '75GB', price: '#12000', duration: '30 days', popular: true },
    { amount: '120GB', price: '#18000', duration: '30 days', popular: false },
    { amount: '200GB', price: '#25000', duration: '30 days', popular: false },
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
            <FaCalendarAlt className="text-green-400 mr-2" />
            <h1 className="text-white font-medium">Monthly Plans</h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">📅 30-Day Data Plans</h2>
            <p className="text-gray-600 text-sm">Best value for heavy data users</p>
          </div>

          <div className="grid gap-4">
            {monthlyPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-xl p-4 shadow-lg border-2 ${plan.popular ? 'border-green-400' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-2 left-4">
                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                      Best Value
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{plan.amount}</div>
                    <div className="text-gray-600 text-lg font-medium">{plan.price}</div>
                    <div className="text-green-600 text-sm">{plan.duration}</div>
                  </div>
                  
                  <div className="text-right">
                    <Link 
                      to={`/payment?amount=${plan.amount}&price=${plan.price}`}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Subscribe
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

export default MonthlyPlans;