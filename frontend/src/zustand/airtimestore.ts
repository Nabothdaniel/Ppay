import { create } from "zustand";

interface AirtimeStoreState {
  phone: string;
  setPhone: (phone: string) => void;

  activeTab: "Hot" | "Daily" | "Weekly" | "Monthly" | "XtraValue";
  setActiveTab: (tab: "Hot" | "Daily" | "Weekly" | "Monthly" | "XtraValue") => void;

  selectedNetwork: "MTN" | "Glo" | "Airtel";
  setSelectedNetwork: (network: "MTN" | "Glo" | "Airtel") => void;

  hasPin: boolean;
  setHasPin: (value: boolean) => void;

  pendingPayment: null | {
    txId: string;
    amount: string;
    price: string;
    cashback: string;
    network: string;
  };
  setPendingPayment: (payment: AirtimeStoreState["pendingPayment"]) => void;
  clearPendingPayment: () => void;
}

export const useAirtimeStore = create<AirtimeStoreState>((set) => ({
  phone: "",
  setPhone: (phone: string) => set({ phone }),

  activeTab: "Hot",
  setActiveTab: (tab: "Hot" | "Daily" | "Weekly" | "Monthly" | "XtraValue") =>
    set({ activeTab: tab }),

  selectedNetwork: "MTN",
  setSelectedNetwork: (network: "MTN" | "Glo" | "Airtel") =>
    set({ selectedNetwork: network }),

  hasPin: false,
  setHasPin: (value: boolean) => set({ hasPin: value }),

  pendingPayment: null,
  setPendingPayment: (payment: AirtimeStoreState["pendingPayment"]) =>
    set({ pendingPayment: payment }),
  clearPendingPayment: () => set({ pendingPayment: null }),
}));
