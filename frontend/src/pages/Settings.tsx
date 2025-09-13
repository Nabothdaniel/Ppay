import { 
  FaArrowLeft, 
  FaUser, 
  FaBell, 
  FaLock, 
  FaCreditCard, 
  FaQuestionCircle, 
  FaSignOutAlt,
  FaChevronRight,
  FaMoon,
  FaGlobe
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Settings = () => {
  const settingsItems = [
    {
      icon: FaUser,
      title: 'Profile',
      subtitle: 'Edit personal information',
      color: 'text-blue-500'
    },
    {
      icon: FaBell,
      title: 'Notifications',
      subtitle: 'Manage notification preferences',
      color: 'text-green-500'
    },
    {
      icon: FaLock,
      title: 'Security',
      subtitle: 'Password and security settings',
      color: 'text-red-500'
    },
    {
      icon: FaCreditCard,
      title: 'Payment Methods',
      subtitle: 'Manage cards and wallets',
      color: 'text-purple-500'
    },
    {
      icon: FaMoon,
      title: 'Display',
      subtitle: 'Theme and display settings',
      color: 'text-indigo-500'
    },
    {
      icon: FaGlobe,
      title: 'Language',
      subtitle: 'Change app language',
      color: 'text-orange-500'
    },
    {
      icon: FaQuestionCircle,
      title: 'Help & Support',
      subtitle: 'Get help and contact support',
      color: 'text-cyan-500'
    }
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
          <Link to="/" className="mr-4">
            <FaArrowLeft className="text-white text-xl" />
          </Link>
          <h1 className="text-white font-medium text-lg">Settings</h1>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Profile Section */}
          <div className="bg-white rounded-xl p-4 shadow-lg border mb-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                <FaUser className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">John Doe</h3>
                <p className="text-gray-600">091 3716 9644</p>
                <p className="text-emerald-600 text-sm">Premium Member</p>
              </div>
            </div>
          </div>

          {/* Settings Items */}
          <div className="space-y-2">
            {settingsItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm border flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center">
                  <div className={`w-10 h-10 ${item.color} bg-gray-100 rounded-lg flex items-center justify-center mr-4`}>
                    <item.icon className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </div>
                </div>
                <FaChevronRight className="text-gray-400" />
              </div>
            ))}
          </div>

          {/* Account Section */}
          <div className="mt-6 space-y-2">
            <div className="bg-white rounded-xl p-4 shadow-sm border flex items-center justify-between hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 text-red-500 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <FaSignOutAlt className="text-lg" />
                </div>
                <div>
                  <h4 className="font-medium text-red-600">Sign Out</h4>
                  <p className="text-sm text-gray-600">Sign out of your account</p>
                </div>
              </div>
              <FaChevronRight className="text-gray-400" />
            </div>
          </div>

          {/* App Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">Version 2.1.0</p>
            <p className="text-gray-400 text-xs">© 2024 DataApp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;