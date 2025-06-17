import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { VisibilityDM } from "@/domain-models/ModuleVisibilityDM";

interface VisibilityStore {
    visibility: VisibilityDM[] | null;
    setVisibility: (visibility: VisibilityDM[] | null) => void;
}

const useVisibilityStore = create<VisibilityStore>()(
    persist(
        (set) => ({
            visibility: null,
            setVisibility: (visibility) => {
                set({ visibility });
            },
        }),
        {
            name: "visibility-storage",
            storage: createJSONStorage(() => sessionStorage),
            onRehydrateStorage: (state) => {
            }
        }
    )
);

export default useVisibilityStore;