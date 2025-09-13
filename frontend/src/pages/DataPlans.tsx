import {
    FaChevronDown
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AccountCard from '../components/dataplans/AccountCard';
import { Search } from '../components/dataplans/Search';

const DataPlans = () => {


    return (
        <div className="min-h-screen bg-gray-100">
            {/* Mobile Container */}
            <div className="max-w-sm mx-auto min-h-screen relative">


                {/* Main Content */}
                <div className="px-2 py-3 min-h-screen">
                    {/* Main Card */}
                    <div className=" rounded-3xl px-3 py-6">

                        {/* Account Card */}
                        <AccountCard />

                        {/* Search */}
                        <Search />

                        {/* Phone Number */}
                        <div className="flex items-center justify-between mb-6 p-3 border border-gray-200 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                    <span className="text-gray-600 text-sm">👤</span>
                                </div>
                                <span className="text-gray-900 font-medium">091 3716 9644</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm">≈</span>
                                </div>
                                <FaChevronDown className="text-gray-400" />
                            </div>
                        </div>

                        {/* Data Plans Header */}
                        <div className="mb-4">
                            <h3 className="text-gray-900 font-medium">Data Plans</h3>
                        </div>

                        {/* Plan Tabs */}
                        <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
                            <Link to="/hot-plans" className="flex-1 bg-emerald-500 text-white py-2 px-4 rounded-md text-sm font-medium text-center">
                                Hot
                            </Link>
                            <Link to="/daily-plans" className="flex-1 text-gray-600 py-2 px-4 rounded-md text-sm text-center hover:bg-gray-200">
                                Daily
                            </Link>
                            <Link to="/weekly-plans" className="flex-1 text-gray-600 py-2 px-4 rounded-md text-sm text-center hover:bg-gray-200">
                                Weekly
                            </Link>
                            <Link to="/monthly-plans" className="flex-1 text-gray-600 py-2 px-4 rounded-md text-sm text-center hover:bg-gray-200">
                                Monthly
                            </Link>
                            <Link to="/xtravalue-plans" className="flex-1 text-gray-600 py-2 px-4 rounded-md text-sm text-center hover:bg-gray-200">
                                XtraValue
                            </Link>
                        </div>

                        {/* Data Plans Grid */}
                        <div className="grid grid-cols-3 gap-4">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="text-center">
                                    <div className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full inline-block mb-2">
                                        Hot
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 mb-1">1GB</div>
                                    <div className="text-gray-600 text-sm mb-2">#500</div>
                                    <Link
                                        to="/payment?amount=1GB&price=%23500"
                                        className="bg-emerald-500 text-white text-xs py-1 px-3 rounded-full hover:bg-emerald-600 transition-colors"
                                    >
                                        #18 Cashback
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation Dots */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default DataPlans;