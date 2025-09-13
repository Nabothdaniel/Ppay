import { IoCopyOutline } from "react-icons/io5";
const AccountCard = () => {
    return (
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-500 rounded-xl p-4 text-white mb-6">
            <div className="flex justify-between items-center">
                <div>
                    <div className="text-lg font-bold">*955#</div>
                    <div className="text-emerald-100 text-sm">Check Data balance by dialing *955#, Thank you for choosing us</div>
                </div>
                <button className="bg-emerald-600 px-4 py-2 rounded-lg flex items-center space-x-2">
                    <IoCopyOutline className="text-sm" />
                    <span>Copy</span>
                </button>
            </div>
        </div>
    )
}

export default AccountCard
