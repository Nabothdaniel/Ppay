
import BottomNav from '../components/dashboard/BottomNav';
import BalanceCard from '../components/dashboard/BalanceCard';
import HotDeal from '../components/ui/HotDeal';
import Header from '../components/dashboard/Header';
import BettingPayment from '../components/ui/BettingPayment';
import QuickActions from '../components/dashboard/QuickActions';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Mobile Container */}
            <div className="max-w-sm mx-auto min-h-screen relative">

                {/* Main Content */}
                <div className="px-4 py-6 min-h-screen">
                    {/* Main Card */}
                    <div>

                        {/* Greeting Header */}
                        <Header />


                        {/* Balance Card */}
                        <BalanceCard />

                        {/* Betting Payment Notification */}
                        <BettingPayment />

                        {/* Quick Actions */}
                        <QuickActions />

                        {/* Hot Deal Promo */}
                        <HotDeal />
                    </div>
                </div>

                {/* Bottom Navigation */}
                <BottomNav />
            </div>
        </div>
    );
};

export default Dashboard;