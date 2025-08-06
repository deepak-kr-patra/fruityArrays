import { create } from 'zustand'

const useLevel = create((set) => ({
    level: 1,
    setLevel: (level) => set({ level }),
    fruits: ['🍎', '🍌', '🍇', '🍓', '🍍'],
    setFruits: (fruits) => set({ fruits })
}))

export default useLevel;