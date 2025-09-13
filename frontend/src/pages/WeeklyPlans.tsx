import { FaArrowLeft, FaCalendarWeek } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WeeklyPlans = () => {
  const weeklyPlans = [
    { amount: '2GB', price: '#800', duration: '7 days' },
    { amount: '5GB', price: '#1500', duration: '7 days' },
    { amount: '10GB', price: '#2500', duration: '7 days' },
    { amount: '15GB', price: '#3500', duration: '7 days' },
    { amount: '25GB', price: '#5000', duration: '7 days' },
    { amount: '40GB', price: '#7500', duration: '7 days' },
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
            <FaCalendarWeek className="text-purple-400 mr-2" />
            <h1 className="text-white font-medium">Weekly Plans</h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">📅 7-Day Data Plans</h2>
            <p className="text-gray-600 text-sm">Great value for weekly data usage</p>
          </div>

          <div className="grid gap-4">
            {weeklyPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{plan.amount}</div>
                    <div className="text-gray-600 text-lg font-medium">{plan.price}</div>
                    <div className="text-purple-600 text-sm">{plan.duration}</div>
                  </div>
                  
                  <div className="text-right">
                    <Link 
                      to={`/payment?amount=${plan.amount}&price=${plan.price}`}
                      className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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

export default WeeklyPlans;