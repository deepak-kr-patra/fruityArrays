const levelsInfo = {
    1: {
        defaultFruits: ['🍎', '🍌', '🍓', '🍍', '🍇'],
        expectedFruits: ['🍎', '🍌', '🍓', '🍍', '🍇', '🥭'],
        maxLines: 1,
        defaultCode: "",
        levelDescription: ['Use push method to add "🥭" emoji (which is basically a string) to the fruits array.']
    },
    2: {
        defaultFruits: ['🍐', '🍌', '🍇', '🍓', '🍍', '🥭'],
        expectedFruits: ['🍐', '🍌', '🍇', '🍓', '🍍'],
        maxLines: 1,
        defaultCode: "",
        levelDescription: ['Use pop method to remove "🥭" from the fruits array.']
    },
    3: {
        defaultFruits: ['🍇', '🍊', '🍎', '🍓', '🍍'],
        expectedFruits: ['🍉', '🍇', '🍊', '🍎', '🍓', '🍍'],
        maxLines: 1,
        defaultCode: "",
        levelDescription: ['Use unshift method to add "🍉" to the left of fruits array.']
    },
    4: {
        defaultFruits: ['🍎', '🍌', '🍇', '🍓', '🍍', '🥭'],
        expectedFruits: ['🍌', '🍇', '🍓', '🍍', '🥭'],
        maxLines: 1,
        defaultCode: "",
        levelDescription: ['Use shift method to remove "🍎" from the left of fruits array.']
    },
    5: {
        defaultFruits: ['🍍', '🍋', '🍇', '🍓', '🥭'],
        expectedFruits: ['🍋', '🍇', '🍓', '🥭', '🍎'],
        maxLines: 2,
        defaultCode: "",
        levelDescription: ['Use combination of two methods to get the expected fruits array.']
    },
    6: {
        defaultFruits: ['🍇', '🍋', '🍎', '🍓', '🍍'],
        expectedFruits: ['🥭', '🍌', '🍇', '🍋', '🍎', '🍓'],
        maxLines: 3,
        defaultCode: "",
        levelDescription: ['Use combination of methods to get the desired fruits array.']
    },
    7: {
        defaultFruits: ['🍊', '🍋', '🍎', '🍌', '🍉'],
        expectedFruits: ['🍉', '🍌', '🍎', '🍋', '🍊', '🥭'],
        maxLines: 2,
        defaultCode: "",
        levelDescription: ['Use the reverse method with another method to get the expected fruits array.']
    },
    8: {
        defaultFruits: ['🍇', '🍐', '🍋', '🍉', '🍊'],
        expectedFruits: ['🍇', '🍐', '🍊'],
        maxLines: 1,
        defaultCode: "",
        levelDescription: [
            'Use the splice method to remove a specific portion from the fruits array.',
            'The splice method removes elements from the original array and, if necessary, inserts new elements in their place, and returns a new array containing elements removed from the original array.',
            'It takes at least two arguements, start index and deleteCount (number of elements to remove).'
        ]
    },
    9: {
        defaultFruits: ['🍊', '🍇', '🍎', '🍌', '🍉'],
        expectedFruits: ['🍊', '🍇', '🥭', '🍌', '🍉'],
        maxLines: 1,
        defaultCode: "",
        levelDescription: ['Use the splice method to remove "🍎" and replace it with "🥭".']
    },
    10: {
        defaultFruits: ['🍎', '🍓', '🍋', '🍌', '🍉'],
        expectedFruits: ['🍓', '🍋', '🍌'],
        maxLines: 1,
        defaultCode: "fruits = ",
        levelDescription: [
            'Use the slice method to get a specific portion of the fruits array.',
            'The slice method does not actually mutate the original array, but returns a new array with the specific portion sliced from the original array.',
            'It takes two arguements, start and end indices (end is exclusive).'
        ]
    },
    11: {
        defaultFruits: ['🍇', '🍓', '🍍', '🍉'],
        expectedFruits: ['🍇', '🍎', '🥭', '🍍', '🍉', '🍌'],
        maxLines: 2,
        defaultCode: "",
        levelDescription: ['Use combination of two methods to modify the fruits array as expected.']
    },
    12: {
        defaultFruits: ['🥭', '🍌', '🍇', '🍉', '🍐'],
        expectedFruits: ['🍎', '🍎', '🍎', '🍎', '🍎'],
        maxLines: 3,
        defaultCode: "",
        levelDescription: [
            'Use the map method to change all the elements in fruits array to "🍎".',
            'The map method takes a defined callback function as a parameter, and calls that function one time for each element in the array, and returns an array that contains the results.',
            'The callback function usually takes two parameters, first one to represent each individual element of the array, second one to represent the index number.'
        ]
    },
    13: {
        defaultFruits: ['🍐', '🍓', '🍋', '🍉', '🍊'],
        expectedFruits: ['🥭', '🥭', '🥭', '🥭', '🥭'],
        maxLines: 3,
        defaultCode: "",
        levelDescription: [
            'Use the forEach method to change all the elements in fruits array to "🥭".',
            'The forEach method is similar to map method, it takes a defined callback function as a parameter, and calls that function one time for each element in the array, but it does not return anything.',
            'The callback function usually takes two parameters, first one to represent each individual element of the array, second one to represent the index number.'
        ]
    },
    14: {
        defaultFruits: ['🍉', '🍇', '🍓', '🍉', '🍊'],
        expectedFruits: ['🍉', '🍉'],
        maxLines: 1,
        defaultCode: "",
        levelDescription: [
            'Use the filter method to select only "🍉" from the fruits array. And write the code in one line.',
            'The filter method takes a callback function called predicate as a parameter, and calls that function for each element in the array, and returns the elements that meet the condition specified in the predicate.',
            'The callback function usually takes two parameters, first one to represent each individual element of the array, second one to represent the index number.'
        ]
    },
    15: {
        defaultFruits: ['🍉', '🥭', '🍓', '🍇', '🥭', '🥭'],
        expectedFruits: ['🍇', '🍓', '🍉'],
        maxLines: 2,
        defaultCode: "",
        levelDescription: ['Use combination of two methods to display the expected fruits array.']
    },
};

export const getLevelInfo = (level) => {
    return levelsInfo[level];
};