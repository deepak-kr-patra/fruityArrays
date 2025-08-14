import { create } from 'zustand'

const useLevel = create((set) => ({
    level: 1,
    setLevel: (level) => set({ level }),
    resetUsed: false,
    setResetUsed: (resetUsed) => set({ resetUsed }),
    fruits: [],
    setFruits: (fruits) => set({ fruits })
}))

export default useLevel;