import { telcoLogos } from "../constants/telecos";
import { formatCurrency } from "../utils/helperFns";

interface PurchaseSummaryProps {
  txId: string;
  amount: string;
  price: string;
  cashback: string;
  network: string;
}

const PurchaseSummary = ({ txId, amount, price, cashback, network }: PurchaseSummaryProps) => {
  const networkLogos: Record<string, string> = {
    MTN: telcoLogos.MTN,
    Glo: telcoLogos.Glo,
    Airtel: telcoLogos.Airtel,
  };

  return (
    <div>
      <h3 className="text-gray-900 font-semibold mb-4">Purchase Summary</h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Transaction ID</span>
          <span className="font-mono text-xs text-gray-800 whitespace-nowrap truncate max-w-[160px]">
            {txId}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Network</span>
          <div className="flex items-center gap-2">
            {networkLogos[network] && (
              <img
                src={networkLogos[network]}
                alt={network}
                className="w-6 h-6 rounded-full shadow-sm"
              />
            )}
            <span className="font-medium">{network}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Data Plan</span>
          <span className="font-medium">{amount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Price</span>
          <span className="font-medium">{formatCurrency(price)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Cashback</span>
          <span className="text-emerald-600 font-medium">
            {formatCurrency(cashback)}
          </span>
        </div>
        <hr className="text-gray-200" />
        <div className="flex justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-bold text-lg text-emerald-600">
            {formatCurrency(price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSummary;
