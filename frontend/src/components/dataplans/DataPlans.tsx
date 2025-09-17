import { useMemo, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NairaIcon from "../ui/NairaIcon";
import { telcoLogos } from "../../constants/telecos";
import { useAirtimeStore } from "../../zustand/airtimestore";

interface Plan {
  id: number;
  category: "Hot" | "Daily" | "Weekly" | "Monthly" | "XtraValue";
  size: string;
  price: string;
  cashback: string;
  network: "MTN" | "Glo" | "Airtel";
}

const categories = ["Hot", "Daily", "Weekly", "Monthly", "XtraValue"] as const;
const networks = ["MTN", "Glo", "Airtel"] as const;

function detectNetwork(phone: string): Plan["network"] | null {
  if (/^(0803|0806|0703|0706|0813|0816|0810|0814|0903|0906|0913|0916)/.test(phone)) return "MTN";
  if (/^(0805|0807|0705|0815|0811|0905|0915)/.test(phone)) return "Glo";
  if (/^(0802|0808|0708|0812|0701|0902|0907|0912)/.test(phone)) return "Airtel";
  return null;
}

const DataPlansSection = ({ phoneNumber }: { phoneNumber?: string }) => {
  const autoNetwork = useMemo(() => detectNetwork(phoneNumber || ""), [phoneNumber]);

  // zustand state
  const { activeTab, selectedNetwork, setActiveTab, setSelectedNetwork, } = useAirtimeStore();

  // local state for dropdown
  const [open, setOpen] = useState(false);


  const navigate = useNavigate();

  const plans: Plan[] = [
    { id: 1, category: "Hot", size: "1GB", price: "500", cashback: "18", network: "MTN" },
    { id: 2, category: "Hot", size: "2GB", price: "1000", cashback: "40", network: "MTN" },
    { id: 3, category: "Hot", size: "5GB", price: "2500", cashback: "90", network: "Airtel" },
    { id: 4, category: "Hot", size: "10GB", price: "4500", cashback: "150", network: "Glo" },
    { id: 17, category: "Hot", size: "500MB", price: "300", cashback: "10", network: "Glo" },
    { id: 18, category: "Hot", size: "3GB", price: "1500", cashback: "55", network: "Airtel" },
    { id: 5, category: "Daily", size: "500MB", price: "200", cashback: "5", network: "MTN" },
    { id: 6, category: "Daily", size: "1GB", price: "350", cashback: "10", network: "Glo" },
    { id: 7, category: "Daily", size: "2GB", price: "700", cashback: "15", network: "Airtel" },
    { id: 19, category: "Daily", size: "3GB", price: "1000", cashback: "25", network: "MTN" },
    { id: 20, category: "Daily", size: "1.5GB", price: "500", cashback: "12", network: "Airtel" },
    { id: 21, category: "Daily", size: "750MB", price: "250", cashback: "8", network: "Glo" },
    { id: 8, category: "Weekly", size: "1.5GB", price: "1000", cashback: "25", network: "Airtel" },
    { id: 9, category: "Weekly", size: "3GB", price: "1500", cashback: "40", network: "MTN" },
    { id: 10, category: "Weekly", size: "7GB", price: "3000", cashback: "90", network: "Glo" },
    { id: 22, category: "Weekly", size: "5GB", price: "2200", cashback: "70", network: "MTN" },
    { id: 23, category: "Weekly", size: "4GB", price: "1800", cashback: "60", network: "Airtel" },
    { id: 24, category: "Weekly", size: "6GB", price: "2500", cashback: "80", network: "Glo" },
    { id: 11, category: "Monthly", size: "10GB", price: "3500", cashback: "100", network: "Glo" },
    { id: 12, category: "Monthly", size: "20GB", price: "6000", cashback: "180", network: "MTN" },
    { id: 13, category: "Monthly", size: "40GB", price: "10000", cashback: "300", network: "Airtel" },
    { id: 25, category: "Monthly", size: "50GB", price: "12000", cashback: "350", network: "MTN" },
    { id: 26, category: "Monthly", size: "15GB", price: "5000", cashback: "150", network: "Airtel" },
    { id: 27, category: "Monthly", size: "25GB", price: "7000", cashback: "200", network: "Glo" },
    { id: 28, category: "Monthly", size: "75GB", price: "15000", cashback: "450", network: "MTN" },
    { id: 29, category: "Monthly", size: "100GB", price: "20000", cashback: "600", network: "Airtel" },
    { id: 14, category: "XtraValue", size: "5GB + Voice", price: "5000", cashback: "150", network: "MTN" },
    { id: 15, category: "XtraValue", size: "10GB + Voice", price: "9000", cashback: "250", network: "Glo" },
    { id: 16, category: "XtraValue", size: "15GB + Voice", price: "12000", cashback: "400", network: "Airtel" },
    { id: 30, category: "XtraValue", size: "20GB + Voice", price: "15000", cashback: "500", network: "MTN" },
    { id: 31, category: "XtraValue", size: "25GB + Voice", price: "18000", cashback: "600", network: "Glo" },
    { id: 32, category: "XtraValue", size: "30GB + Voice", price: "20000", cashback: "750", network: "Airtel" },
  ];

  const filteredPlans = plans.filter(
    (plan) => plan.category === activeTab && plan.network === selectedNetwork
  );

  const networkLogos: Record<Plan["network"], string> = {
    MTN: telcoLogos.MTN,
    Glo: telcoLogos.Glo,
    Airtel: telcoLogos.Airtel,
  };

  const handleBuy = (plan: Plan) => {
    const txId = uuidv4();
   navigate(
    `/payment?txId=${txId}&amount=${encodeURIComponent(plan.size)}&price=${encodeURIComponent(
      plan.price
    )}&cashback=${plan.cashback}&network=${plan.network}`
  );
  };

  return (
    <>
      <div className="mb-4">
        <h3 className="text-gray-900 font-medium">Data Plans</h3>
        {autoNetwork && (
          <p className="text-xs text-gray-500 mt-1">
            Detected Network: <span className="font-semibold">{autoNetwork}</span>
          </p>
        )}
      </div>

      {/* Custom Dropdown */}
      <div className="relative mb-4">
        <div
          className="flex items-center justify-between bg-gray-100 rounded-lg px-3 py-2 cursor-pointer active:scale-95 transition"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-2">
           <img
         src={networkLogos[selectedNetwork as "MTN" | "Glo" | "Airtel"]}
        alt={selectedNetwork}
        />

            <span className="text-sm font-medium text-gray-700">{selectedNetwork}</span>
          </div>
          {open ? (
            <HiChevronUp className="text-gray-500 text-lg" />
          ) : (
            <HiChevronDown className="text-gray-500 text-lg" />
          )}
        </div>

        {open && (
          <div className="absolute mt-1 w-full bg-white shadow-lg rounded-lg z-10">
            {networks.map((net) => (
              <div
                key={net}
                onClick={() => {
                  setSelectedNetwork(net);
                  setOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer transition"
              >
                <img src={networkLogos[net]} alt={net} className="w-6 h-6 rounded-full" />
                <span className="text-sm font-medium text-gray-700">{net}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto space-x-2 mb-6 bg-gray-100 rounded-lg p-1 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`flex-shrink-0 min-w-[90px] py-2 px-4 rounded-md text-sm font-medium text-center transition-colors ${
              activeTab === cat
                ? "bg-emerald-500 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Data Plans Grid */}
      {filteredPlans.length === 0 ? (
        <div className="text-center text-gray-500 text-sm py-6">No plans available</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filteredPlans.map((plan) => (
            <div
              onClick={() => handleBuy(plan)}
              key={plan.id}
              className="flex flex-col items-center justify-between p-3"
            >
              <div className="bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full mb-2">
                {plan.category}
              </div>
              <img
                src={networkLogos[plan.network]}
                alt={plan.network}
                className="w-10 h-10 rounded-full mb-2"
              />
              <div className="text-md font-semibold text-gray-900 mb-1">{plan.size}</div>
              <div className="flex items-center justify-center mb-3">
                <NairaIcon classes="text-gray-700 w-3.5 h-3.5 mr-1" />
                <span className="text-gray-700 text-[11px] font-medium">{plan.price}</span>
              </div>
              <button className="bg-emerald-500 inline-flex items-center gap-1 text-white text-[11px] py-1 px-2 rounded-full hover:bg-emerald-600 transition-colors mt-auto active:scale-95">
                <div className="flex items-center">
                  <NairaIcon classes="text-white w-3.5 h-3.5 mr-1" />
                  {plan.cashback}
                </div>
                Cashback
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DataPlansSection;
