import { telcoLogos } from "../../constants/telecos";

interface ConfirmPaymentModalProps {
  amount: string;
  price: string;
  phone: string;
  network: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmPaymentModal = ({
  amount,
  price,
  phone,
  network,
  onCancel,
  onConfirm,
}: ConfirmPaymentModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm relative mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-500 px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">Confirm Purchase</h2>
          {telcoLogos[network] && (
            <img
              src={telcoLogos[network]}
              alt={network}
              className="w-10 h-10 rounded-full bg-white shadow-sm"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <p className="text-sm text-gray-600">
            Please review your purchase details carefully before proceeding.
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600 font-medium">Plan</span>
              <span className="font-semibold text-gray-900">{amount}</span>
            </div>

            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600 font-medium">Price</span>
              <span className="font-semibold text-gray-900">₦{price}</span>
            </div>

            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600 font-medium">Phone</span>
              <span className="font-semibold text-gray-900">{phone}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Network</span>
              <span className="flex items-center gap-2 font-semibold text-gray-900">
                {telcoLogos[network] && (
                  <img
                    src={telcoLogos[network]}
                    alt={network}
                    className="w-5 h-5 rounded-full"
                  />
                )}
                {network}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 p-4 border-t border-gray-200  bg-gray-50">
          <button
            onClick={onCancel}
            className="flex-1 border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-emerald-500 text-white rounded-lg py-2 hover:bg-emerald-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPaymentModal;
