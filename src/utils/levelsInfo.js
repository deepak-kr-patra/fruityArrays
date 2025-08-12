const levelsInfo = [
    // level 1 info at index 0
    {
        defaultFruits: ['🍎', '🍌', '🍓', '🍍', '🍇'],
        expectedFruits: ['🍎', '🍌', '🍓', '🍍', '🍇', '🥭'],
        maxLines: 1,
        levelDescription: 'Use push method to add "🥭" emoji(which is basically a string) to the fruits array.'
    },
    // level 2 info at index 1
    {
        defaultFruits: ['🍐', '🍌', '🍇', '🍓', '🍍', '🥭'],
        expectedFruits: ['🍐', '🍌', '🍇', '🍓', '🍍'],
        maxLines: 1,
        levelDescription: 'Use pop method to remove "🥭" from the fruits array.'
    },
    // level 3 info at index 2
    {
        defaultFruits: ['🍇', '🍊', '🍎', '🍓', '🍍'],
        expectedFruits: ['🍉', '🍇', '🍊', '🍎', '🍓', '🍍'],
        maxLines: 1,
        levelDescription: 'Use unshift method to add "🍉" to the left of fruits array.'
    },
    // level 4 info at index 3
    {
        defaultFruits: ['🍎', '🍌', '🍇', '🍓', '🍍', '🥭'],
        expectedFruits: ['🍌', '🍇', '🍓', '🍍', '🥭'],
        maxLines: 1,
        levelDescription: 'Use shift method to remove "🍎" from the left of fruits array.'
    },
    // level 5 info at index 4
    {
        defaultFruits: ['🍍', '🍋', '🍇', '🍓', '🥭'],
        expectedFruits: ['🍋', '🍇', '🍓', '🥭', '🍎'],
        maxLines: 2,
        levelDescription: 'Use combination of two methods to get the expected fruits array.'
    },
    // level 6 info at index 5
    {
        defaultFruits: ['🍇', '🍋', '🍎', '🍓', '🍍'],
        expectedFruits: ['🥭', '🍌', '🍇', '🍋', '🍎', '🍓'],
        maxLines: 3,
        levelDescription: 'Use combination of methods to get the desired fruits array.'
    },
];

export const getLevelInfo = (level) => {
    return levelsInfo[level - 1];
};