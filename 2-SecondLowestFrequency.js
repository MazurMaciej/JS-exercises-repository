/*
Second Lowest Frequency

Write a function which accepts an array of integers and returns an element of that array. 

The function should determine the frequency of each element (how many times the element appears in the array) and whenever possible should return the element with the second-
lowest frequency. 

Otherwise it should return the integer with the lowest frequency.
If there is more than one element satisfying the requirements then the second smallest one (according to value) should be returned.

Example outputs:
secondLowest( [4, 3, 1, 1, 2] ) === 1
secondLowest( [4, 3, 1, 1, 2, 2] ) === 2
secondLowest( [4, 3, 1, 2] ) === 2
*/

const secondLowest = (numbersArray) => {

    const summarisedArray = numbersArray.reduce((allNumbers, number) => {
        number in allNumbers ? allNumbers[number]++ : allNumbers[number] = 1;

        return allNumbers
    }, {})

    const sortedArray = Object
        .entries(summarisedArray)
        .sort((a, b) => b[1] - a[1])

    if (sortedArray[0][1] === sortedArray[1][1]) return sortedArray[1][0];

    else if (sortedArray[0][1] > sortedArray[1][1]) return sortedArray[0][0];

    else if (sortedArray[1][1] === sortedArray[2][1]) return sortedArray[1][0];
}


secondLowest([4, 3, 1, 1, 2])
secondLowest([4, 3, 1, 1, 2, 2])
secondLowest([4, 3, 1, 2])