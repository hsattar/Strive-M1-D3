// Additional assignments for Day 3

/* EXTRA 1
Use a ternary operator to assign to a variable called gender the string values "male" or "female".
The choice should be made based on the value of another variable called isMale.

ANSWER:
*/

let isMale = false

let gender = isMale ? 'Male' : 'Female'
console.log('Answer Q1 - Gender is', gender)

/* EXTRA 2
Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.

ANSWER:
*/

let num1 = 3
let num2 = 5
let targetNumber = 8

if ((num1 === targetNumber) || (num2 === targetNumber)) {
    console.log('Answer Q2 -', 'The Value of either num1 or num2 (or both) is equal to the targetNumber', targetNumber)
} else if (((num1 + num2) === targetNumber) || ((num1 - num2) === targetNumber)) {
    console.log('Answer Q2 -', 'When you add num1 and num2 or subtract them they eaqual the targetNumber', targetNumber)
} else {
    console.log('Answer Q2 -', 'None of the values of num1 or num2 equal 8, nor does it equal 8 if you add or subtract the two numbers')
}


/* EXTRA 3
Create a variable and assign to it the concatenation of two strings.

ANSWER:
*/

let greetings = 'Hello, Welcome '
let name = 'Hasan'
let greetingsMessage = greetings + name
console.log('Answer Q3 - greetings + name is', greetingsMessage)


/* EXTRA 4
Create three variables and assign a numerical value to each one of them. 
Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
Display the result in the console.

ANSWER:
*/

let number1 = 1
let number2 = 2
let number3 = 3


/* EXTRA 5
Write a piece of code for finding the average of two given integers.

ANSWER:
*/
const averageNumber = (a, b) => {
    return (a + b) / 2
}

console.log('Answer Q5 - The average of a and b is', averageNumber(3, 8))


/* EXTRA 6
Write a piece of code for finding the longest of two given strings.

ANSWER:
*/

let string1 = 'short'
let string2 = 'This is a longer string'

let whichStringIsLonger = string1.length >= string2.length ? 'string1 is Longer' : 'string2 is longer'
console.log('Answer Q6 -', whichStringIsLonger, 'is the longer string')


/* EXTRA 7
Write a piece of code for checking if a given value is a integer or not.

ANSWER:
*/

const isNumAnInteger = (number) => {
    return Number.isInteger(number)
}

console.log('Answer Q7 - The number chose is an integer?', isNumAnInteger(4.5))


/* EXTRA 8
Write a piece of code for calculating a certain percentage of a given number.
(Ex.: the 20% of 400 is 80)

ANSWER:
*/

const findPercentageOfNumber = (percent, number) => {
    return (number / 100) * percent
}

console.log('Answer Q8 - The percentage of the number chosen is', findPercentageOfNumber(15, 70))


/* EXTRA 9
Write a piece of code for checking if a given number is even or odd.

ANSWER:
*/

const isNumEvenOrOdd = (number) => {
    if (number % 2 === 0) {
        console.log('Answer Q9 -', 'The Number Is Even')
    } else {
        console.log('Answer Q9 -', 'The Number is Odd')
    }
}

isNumEvenOrOdd(5)

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/