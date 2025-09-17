import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAirtimeStore } from "../zustand/airtimestore";

const SetupPin = () => {
  const navigate = useNavigate();
  const { setHasPin } = useAirtimeStore();

  const [pin, setPin] = useState(["", "", "", ""]);
  const [confirmPin, setConfirmPin] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const pinRefs = useRef<HTMLInputElement[]>([]);
  const confirmRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    value: string,
    index: number,
    type: "pin" | "confirm"
  ) => {
    if (!/^\d?$/.test(value)) return; // only digits 0-9

    const targetState = type === "pin" ? [...pin] : [...confirmPin];
    targetState[index] = value;

    if (type === "pin") setPin(targetState);
    else setConfirmPin(targetState);

    // auto move to next input
    if (value && index < 3) {
      const refs = type === "pin" ? pinRefs.current : confirmRefs.current;
      refs[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
    type: "pin" | "confirm"
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      const refs = type === "pin" ? pinRefs.current : confirmRefs.current;
      refs[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const pinValue = pin.join("");
    const confirmValue = confirmPin.join("");

    if (pinValue.length !== 4 || confirmValue.length !== 4) {
      setError("PIN must be exactly 4 digits.");
      return;
    }
    if (pinValue !== confirmValue) {
      setError("PINs do not match.");
      return;
    }

    setHasPin(true);
    navigate(-1); // go back to last page (payment)
  };

  const renderPinInputs = (
    label: string,
    state: string[],
    type: "pin" | "confirm",
    refs: React.RefObject<HTMLInputElement[]>
  ) => (
    <div className="max-w-sm mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex justify-between gap-3">
        {state.map((digit, i) => (
          <input
            key={i}
            type="tel"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, i, type)}
            onKeyDown={(e) => handleKeyDown(e, i, type)}
            ref={(el) => {
              if (el) refs.current[i] = el;
            }}
            className="w-14 h-14 border border-gray-300 rounded-lg text-center text-xl font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-6">
      <div className="w-full max-w-sm mx-auto  ">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Setup Your PIN
        </h2>
        <p className="text-sm text-gray-600 mb-8 text-center">
          Create a 4-digit payment PIN to secure your transactions.
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-2 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        {/* Enter PIN */}
        {renderPinInputs("Enter PIN", pin, "pin", pinRefs)}

        {/* Confirm PIN */}
        {renderPinInputs("Confirm PIN", confirmPin, "confirm", confirmRefs)}

        <button
          onClick={handleSubmit}
          disabled={pin.join("").length !== 4 || confirmPin.join("").length !== 4}
          className={`w-full py-3 rounded-xl font-medium text-lg transition ${pin.join("").length !== 4 || confirmPin.join("").length !== 4
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-emerald-500 text-white hover:bg-emerald-600"
            }`}
        >
          Save PIN
        </button>
      </div>
    </div>

  );
};

export default SetupPin;
