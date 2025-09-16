
import AccountCard from '../components/dataplans/AccountCard';
import PhoneNumber from '../components/dataplans/PhoneNumber';
import DataPlansSection from '../components/dataplans/DataPlans';

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

                        {/* Phone Number */}
                        <PhoneNumber/>

                        {/* Data Plans Header */}
                       <DataPlansSection/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataPlans;