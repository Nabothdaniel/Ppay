import { formatCurrency } from "../../utils/helperFns";

interface PaymentConfirmationProps {
  amount?: string | number;
  price: string;
  phone: string;
  network: string;
  setShowConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPin: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirm: boolean;
}

const PaymentConfirmationModal = ({
  amount,
  price,
  phone,
  network,
  setShowConfirm,
  setShowPin,
  showConfirm,
}: PaymentConfirmationProps) => {
  if (!showConfirm) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 relative mx-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">Confirm Purchase</h2>
        <p className="text-sm text-gray-600 mb-3">Please review your purchase details:</p>

        <ul className="space-y-2 text-sm">
          <li><span className="font-medium text-gray-600">Plan:</span> {amount}</li>
          <li><span className="font-medium text-gray-600">Price:</span> {formatCurrency(price)}</li>
          <li><span className="font-medium text-gray-600">Phone:</span> {phone}</li>
          <li><span className="font-medium text-gray-600">Network:</span> {network}</li>
        </ul>

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setShowConfirm(false)}
            className="flex-1 border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setShowConfirm(false);
              setShowPin(true);
            }}
            className="flex-1 bg-emerald-500 text-white rounded-lg py-2 hover:bg-emerald-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmationModal;
