import { useState, useRef } from "react";

interface PaymentPinModalProps {
  onCancel: () => void;
  onSubmit: (pin: string) => void;
}

const PaymentPinModal = ({ onCancel, onSubmit }: PaymentPinModalProps) => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // allow only numbers

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const fullPin = pin.join("");
    if (fullPin.length === 4) {
      onSubmit(fullPin);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center  px-4 z-50">
      <div className="bg-white  rounded-xl shadow-lg w-full max-w-sm p-6 relative">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">
          Enter Payment PIN
        </h2>
        <p className="text-sm text-gray-600 mb-3">
          For security, enter your 4-digit PIN to proceed.
        </p>

        <div className="flex justify-center gap-3 mb-6">
          {pin.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              type="password"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            disabled={pin.join("").length < 4}
            onClick={handleSubmit}
            className={`flex-1 rounded-lg py-2 text-white ${
              pin.join("").length < 4
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-emerald-500 hover:bg-emerald-600"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPinModal;
