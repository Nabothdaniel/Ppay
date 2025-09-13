import { CiUser } from "react-icons/ci"
import { VscBellDot } from "react-icons/vsc"
const Header = () => {
    return (
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
                <CiUser className="text-gray-600 text-lg" />
                <span className="text-gray-900 font-medium">Hi, James</span>
            </div>
            <div className="relative">
                <VscBellDot className="text-red-500 text-xl" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
        </div>
    )
}

export default Header
