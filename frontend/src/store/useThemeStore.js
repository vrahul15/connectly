import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("QuickConnect -theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("QuickConnect -theme", theme);
    set({ theme });
  },
}));
