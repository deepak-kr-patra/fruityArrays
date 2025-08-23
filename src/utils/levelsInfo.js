const levelsInfo = {
    1: {
        defaultFruits: ['🍎', '🍌', '🍓', '🍍', '🍇'],
        expectedFruits: ['🍎', '🍌', '🍓', '🍍', '🍇', '🥭'],
        maxLines: 1,
        levelDescription: [
            'Welcome to Fruits Array, a game where you use JavaScript Array methods to modify the initial fruits array into the expected fruits array.',
            'Use <span>push</span> method to add "🥭" emoji (which is basically a string) to the end of fruits array.',
            '<span>push</span> method takes a string as parameter. For example, <p>fruits.push("🍉");</p> will modify the fruits array into ["🍎", "🍌", "🍓", "🍍", "🍇", "🍉"].'
        ]
    },
    2: {
        defaultFruits: ['🍐', '🍌', '🍇', '🍓', '🍍', '🥭'],
        expectedFruits: ['🍐', '🍌', '🍇', '🍓', '🍍'],
        maxLines: 1,
        levelDescription: [
            'Use <span>pop</span> method to remove "🥭" from the fruits array.',
            '<span>pop</span> method takes no parameters and removes last array element.'
        ]
    },
    3: {
        defaultFruits: ['🍇', '🍊', '🍎', '🍓', '🍍'],
        expectedFruits: ['🍉', '🍇', '🍊', '🍎', '🍓', '🍍'],
        maxLines: 1,
        levelDescription: [
            'Use <span>unshift</span> method to add "🍉" at the start of fruits array.',
            '<span>unshift</span> method takes a string or multiple strings as parameters.'
        ]
    },
    4: {
        defaultFruits: ['🍎', '🍇', '🍌', '🍓', '🍍', '🥭'],
        expectedFruits: ['🍇', '🍌', '🍓', '🍍', '🥭'],
        maxLines: 1,
        defaultCode: "",
        levelDescription: [
            'Use <span>shift</span> method to remove "🍎" from the start of fruits array.',
            'Like <span>pop</span> method, <span>shift</span> method also does not take any parameter.'
        ]
    },
    5: {
        defaultFruits: ['🍍', '🍋', '🍇', '🍓', '🥭'],
        expectedFruits: ['🍋', '🍇', '🍓', '🥭', '🍎'],
        maxLines: 2,
        levelDescription: ['Now use combination of two methods to get the expected fruits array.']
    },
    6: {
        defaultFruits: ['🍇', '🍋', '🍎', '🍓', '🍍'],
        expectedFruits: ['🥭', '🍌', '🍇', '🍋', '🍎', '🍓'],
        maxLines: 3,
        levelDescription: ['Once again use combination of methods to get the expected fruits array.']
    },
    7: {
        defaultFruits: ['🍇', '🍋', '🍎', '🍌', '🍉'],
        expectedFruits: ['🍉', '🍌', '🍎', '🍋', '🍇', '🥭'],
        maxLines: 2,
        levelDescription: [
            '<span>reverse</span> method is used to reverse the elements of the array.',
            'In this level, use the <span>reverse</span> method, and another method to get the expected fruits array.'
        ]
    },
    8: {
        defaultFruits: ['🍇', '🍐', '🍋', '🍉', '🍊'],
        expectedFruits: ['🍇', '🍐', '🍊'],
        maxLines: 1,
        levelDescription: [
            'Use the <span>splice</span> method to remove a specific portion from the fruits array.',
            'The <span>splice</span> method removes elements from the original array and, if necessary, inserts new elements in their place, and returns a new array containing elements removed from the original array.',
            'It takes at least two arguements, <p>start</p> index from where it will begin removing, and <p>deleteCount</p>, number of elements to remove.'
        ]
    },
    9: {
        defaultFruits: ['🍊', '🍇', '🍎', '🍌', '🍉'],
        expectedFruits: ['🍊', '🍇', '🥭', '🍌', '🍉'],
        maxLines: 1,
        levelDescription: [
            'Use the <span>splice</span> method to remove "🍎" and replace it with "🥭".',
            'After <p>start</p> and <p>deleteCount</p> parameters, you can pass one or more strings as parameters to replace the deleted elements.'
        ]
    },
    10: {
        defaultFruits: ['🍎', '🍓', '🍋', '🍌', '🍉'],
        expectedFruits: ['🍓', '🍋', '🍌'],
        maxLines: 1,
        levelDescription: [
            'Use the <span>slice</span> method to get a specific portion of the fruits array.',
            'The <span>slice</span> method does not mutate the original array, but returns a new array with specific elements from the original array.',
            "It takes two arguements, <p>start</p> and <p>end</p> indices, and returns elements within this range. This is exclusive of the element at the index 'end'."
        ]
    },
    11: {
        defaultFruits: ['🍇', '🍓', '🍍', '🍉'],
        expectedFruits: ['🍇', '🍎', '🥭', '🍍', '🍉', '🍌'],
        maxLines: 2,
        levelDescription: [
            'Great going. Now use combination of two methods to modify the fruits array as expected.'
        ]
    },
    12: {
        defaultFruits: ['🥭', '🍌', '🍇', '🍉', '🍐'],
        expectedFruits: ['🍎', '🍎', '🍎', '🍎', '🍎'],
        maxLines: 3,
        levelDescription: [
            'Things might get a bit challenging now. Use the <span>map</span> method to change all the elements in fruits array to "🍎".',
            'The <span>map</span> method takes a defined callback function as a parameter, and calls that function one time for each element in the array, and returns an array that contains the results.',
            'The callback function usually takes two parameters, <p>value</p> which is each individual element of the array, and <p>index</p> of each element.'
        ]
    },
    13: {
        defaultFruits: ['🍐', '🍓', '🍋', '🍉', '🍊'],
        expectedFruits: ['🥭', '🥭', '🥭', '🥭', '🥭'],
        maxLines: 3,
        levelDescription: [
            'Use the <span>forEach</span> method to change all the elements in fruits array to "🥭".',
            'The <span>forEach</span> method is similar to <span>map</span> method, it takes a defined callback function as a parameter, and calls that function one time for each element in the array, but it does not return anything.',
            'This callback function also usually takes two parameters, <p>value</p> which is each individual element of the array, and <p>index</p> of each element.'
        ]
    },
    14: {
        defaultFruits: ['🍉', '🍇', '🍓', '🍉', '🍊'],
        expectedFruits: ['🍉', '🍉'],
        maxLines: 1,
        levelDescription: [
            'Use the <span>filter</span> method to select only "🍉" from the fruits array. And write the required code in one line.',
            "The <span>filter</span> method takes a callback function called 'predicate' as a parameter, and calls that function for each element in the array, and returns the elements that meet the condition specified in the 'predicate'.",
            'This callback function also usually takes two parameters, <p>value</p> which is each individual element of the array, and <p>index</p> of each element.'
        ]
    },
    15: {
        defaultFruits: ['🍉', '🥭', '🍓', '🍇', '🥭', '🥭'],
        expectedFruits: ['🍇', '🍓', '🍉'],
        maxLines: 2,
        levelDescription: ['One final task. Use combination of two methods to display the expected fruits array.']
    },
};

export const getLevelInfo = (level) => {
    return levelsInfo[level];
};

export const getTotalLevels = () => {
    return Object.keys(levelsInfo).length;
};