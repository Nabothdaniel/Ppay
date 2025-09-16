import { create } from "zustand";

interface AirtimeStoreState {
  phone: string;
  setPhone: (phone: string) => void;

  activeTab: "Hot" | "Daily" | "Weekly" | "Monthly" | "XtraValue";
  setActiveTab: (tab: "Hot" | "Daily" | "Weekly" | "Monthly" | "XtraValue") => void;

  selectedNetwork: "MTN" | "Glo" | "Airtel";
  setSelectedNetwork: (network: "MTN" | "Glo" | "Airtel") => void;
}

export const useAirtimeStore = create<AirtimeStoreState>((set:any) => ({
  phone: "",
  setPhone: (phone:string) => set({ phone }),

  activeTab: "Hot",
  setActiveTab: (tab:string) => set({ activeTab: tab }),

  selectedNetwork: "MTN",
  setSelectedNetwork: (network:string) => set({ selectedNetwork: network }),
}));
