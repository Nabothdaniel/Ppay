import { useState } from "react";
import { Link } from "react-router-dom";

import {
    FaHandHoldingUsd,
    FaBolt,
    FaTv,
    FaLightbulb,
} from "react-icons/fa";
import { MdSimCard } from "react-icons/md";
import { IoWifi } from "react-icons/io5";
import { CgMore } from "react-icons/cg";



const QuickActions = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="my-8">
            <h3 className="text-gray-900 font-medium mb-4">Quick Actions</h3>

            {/* Grid */}
            <div className="grid grid-cols-5 gap-4">
                {/* Airtime */}
                <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
                        <MdSimCard className="text-emerald-700" />
                    </div>
                    <span className="text-xs text-gray-700">Airtime</span>
                </div>

                {/* Data */}
                <Link
                    to="/data-plans"
                    className="flex flex-col items-center space-y-2"
                >
                    <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
                        <IoWifi className="text-emerald-700" />
                    </div>
                    <span className="text-xs text-gray-700">Data</span>
                </Link>

                {/* Borrow */}
                <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
                        <FaHandHoldingUsd className="text-emerald-700" />
                    </div>
                    <span className="text-xs text-gray-700">Borrow</span>
                </div>

                {/* Power */}
                <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
                        <FaBolt className="text-emerald-700" />
                    </div>
                    <span className="text-xs text-gray-700">Power</span>
                </div>

                {/* More */}
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="flex flex-col items-center space-y-2 focus:outline-none"
                >
                    <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-105">
                        <CgMore className="text-emerald-700" />
                    </div>
                    <span className="text-xs text-gray-600">
                        {showMore ? "Less" : "More"}
                    </span>
                </button>
            </div>

            {/* Extra Actions with Animation */}
            <div
                className={`grid grid-cols-5 gap-4 mt-4 transition-all duration-500 ease-in-out overflow-hidden ${showMore ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >


                {/* TV Sub */}
                <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
                        <FaTv className="text-emerald-700" />
                    </div>
                    <span className="text-xs text-gray-600">TV</span>
                </div>

                {/* Utilities */}
                <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
                        <FaLightbulb className="text-emerald-700" />
                    </div>
                    <span className="text-xs text-gray-700">Utilities</span>
                </div>
            </div>
        </div>
    );
};

export default QuickActions;
