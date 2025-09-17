import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ConfirmPaymentModal from "../payment/PaymentConfirmationModal";
import PaymentPinModal from "../payment/PaymentPinModal";

const ConfirmPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { txId, amount, price, cashback, network, phone } = location.state || {};

  const [showConfirm, setShowConfirm] = useState(true);
  const [showPin, setShowPin] = useState(false);

  const handleConfirm = () => {
    setShowConfirm(false);
    setShowPin(true);
  };

  const handlePinSubmit = () => {
    setShowPin(false);
    const success = Math.random() > 0.3;
    if (success) {
      navigate("/success", { state: { txId, amount, price, cashback, network, phone } });
    } else {
      navigate("/error", { state: { txId, amount, price, cashback, network, phone } });
    }
  };

  return (
    <>
      {showConfirm && (
        <ConfirmPaymentModal
          amount={amount}
          price={price}
          phone={phone}
          network={network}
          onCancel={() => navigate(-1)}
          onConfirm={handleConfirm}
        />
      )}
      {showPin && (
        <PaymentPinModal
          onCancel={() => setShowPin(false)}
          onSubmit={handlePinSubmit}
        />
      )}
    </>
  );
};

export default ConfirmPayment;
