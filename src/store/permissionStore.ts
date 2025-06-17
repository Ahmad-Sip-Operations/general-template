
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { PermissionsDM } from "@/domain-models/PermissionsDM";

interface PermissionStore {
  permission: PermissionsDM | null;
  setPermission: (permission: PermissionsDM | null) => void;
}

const usePermissionStore = create<PermissionStore>()(
  persist(
    (set) => ({
      permission: null,
      setPermission: (permission) => {
        // console.log("Setting permission:", permission);
        set({ permission });
      },
    }),
    {
      name: "permission-storage",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: (state) => {
        // console.log("Data from sessionStorage:", state?.permission);
      }
    }
  )
);

export default usePermissionStore;
