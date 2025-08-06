const levelsInfo = [
    // level 1 info at index 0
    {
        defaultFruits: ['🍎', '🍌', '🍇', '🍓', '🍍'],
        expectedFruits: ['🍎', '🍌', '🍇', '🍓', '🍍', '🥭'],
        levelDescription: 'Use push method to add "🥭" to the fruits array.'
    },
    // level 2 info at index 1
    {
        defaultFruits: ['🍎', '🍌', '🍇', '🍓', '🍍', '🥭'],
        expectedFruits: ['🍎', '🍌', '🍇', '🍓', '🍍'],
        levelDescription: 'Use pop method to remove "🥭" from the fruits array.'
    },
]

export const getLevelInfo = (level) => {
    return levelsInfo[level - 1];
}