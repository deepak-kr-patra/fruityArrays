import { create } from 'zustand'

const useLevel = create((set) => ({
    level: parseInt(localStorage.getItem('level')) || 1,
    setLevel: (level) => set({ level }),
    levelsCompleted: parseInt(localStorage.getItem('levelsCompleted')) || 0,
    setLevelsCompleted: (levelsCompleted) => set({ levelsCompleted }),
    codeResetUsed: false,
    setCodeResetUsed: (codeResetUsed) => set({ codeResetUsed }),
    fruits: [],
    setFruits: (fruits) => set({ fruits }),
    levelsResetUsed: false,
    setLevelsResetUsed: (levelsResetUsed) => set({ levelsResetUsed })
}))

export default useLevel;