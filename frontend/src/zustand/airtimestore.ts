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
}

export const useAirtimeStore = create<AirtimeStoreState>((set) => ({
  phone: "",
  setPhone: (phone) => set({ phone }),

  activeTab: "Hot",
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedNetwork: "MTN",
  setSelectedNetwork: (network) => set({ selectedNetwork: network }),

  hasPin: false, // default (user has not set PIN)
  setHasPin: (value) => set({ hasPin: value }),
}));
