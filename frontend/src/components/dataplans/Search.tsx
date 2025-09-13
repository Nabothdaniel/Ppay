import { LiaSearchSolid } from "react-icons/lia";
export const Search = () => {
  return (
    <div className="relative mb-6">
                            <LiaSearchSolid className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search for bundle"
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500"
                            />
                        </div>
  )
}

