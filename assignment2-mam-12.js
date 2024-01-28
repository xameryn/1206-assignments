// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy'
console.log('Question 1:')

function checkForY(str) {
    return function() {
        if (str.includes('y')) {
            console.log('YES')
        } else {
            console.log('NO')
        }
    }
}

checkForY('Crazyy')()


// 2. Write a function that finds a factorial of a number.
// Example - 5! = 120 (Use a normal loop for this one.)
console.log('Question 2:')

function getFactorial(num) {
    return function() {
        let factorial = 1
        for (let i = 1; i <= num; i++) {
            factorial *= i
        }
        return factorial
    }
}

console.log(getFactorial(5)()) // 120

//3. You have an array of students
console.log('Question 3:')

let studentList = [
  { name: "Mike",   marks: [80, 50, 60, 100]  },
  { name: "Daniel", marks: [40, 50, 100, 100] },
  { name: "Stacy",  marks: [20, 100, 50, 70]  },
];

function getHighestAverageStudent(arr) {
    console.log(arr)
}

console.log(getHighestAverageStudent(studentList)); // Mike

//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4
console.log('Question 4:')

testArray4 = [20, 4, -10, 4, 11, 20, 4, 2]

function getHighestOccurrence(arr) {
    return function() {
        let highestOccurrence = 0;
        let highestOccurrenceRecord = 0;
        let highestOccurrenceNumber = 0;
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    highestOccurrence++
                }
            }
            if (highestOccurrence > highestOccurrenceRecord) {
                highestOccurrenceRecord = highestOccurrence
                highestOccurrenceNumber = arr[i]
            }
            highestOccurrence = 0
        }
        return highestOccurrenceNumber
    }
}

console.log(getHighestOccurrence(testArray4)()) // 4


//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]
console.log('Question 5:')

testArray5 = [20, 20, 11, 4, 11, 20, 2, 4]

function findUniqueNumber(arr) {
    return arr.find(function(num) {
        return arr.indexOf(num) === arr.lastIndexOf(num) // if the first index of a number is the same as the last index, it is unique
    })
}

console.log(findUniqueNumber(testArray5)) // 2

//6. You have an array of palindromes and not palindromes,  and you have to return only palindromes array
console.log('Question 6:')

testArray6 = ['abc', 'aba', 'ccc', 'dca', 'a']

function returnPalindromes(arr) {
    return arr.filter(function(word) {
        return word === word.split('').reverse().join('') // if the word is the same as the word reversed, return it
    })
}

let words = ['abc', 'aba', 'ccc', 'dca', 'a']
let palindromes = returnPalindromes(words)
console.log(palindromes) // ['aba', 'ccc', 'a']