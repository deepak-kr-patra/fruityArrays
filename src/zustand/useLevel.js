import { create } from 'zustand'

const useLevel = create((set) => ({
    level: parseInt(localStorage.getItem('level')) || 1,
    setLevel: (level) => set({ level }),
    levelsCompleted: parseInt(localStorage.getItem('levelsCompleted')) || 0,
    setLevelsCompleted: (levelsCompleted) => set({ levelsCompleted }),
    resetUsed: false,
    setResetUsed: (resetUsed) => set({ resetUsed }),
    fruits: [],
    setFruits: (fruits) => set({ fruits })
}))

export default useLevel;