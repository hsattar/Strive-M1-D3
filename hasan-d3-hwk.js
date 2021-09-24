/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/


/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.

ANSWER:
Number - Any Number. It can be positive or negative or a decimal point. Can range from -1(256) - +1(256)
String - Any combination of charachters in the alphabet which are placed in "", '', or ``. The sting could also be empty.
Boolean - It can either be true or false
Undefined - This is when you have created a variable but not given it a value yet.
Null - When you have created a variable and said there is nothing inside. This is different to the number 0 or an empty string.

*/


/* EXERCISE 2
Try to describe what a variable is, in your own words.

ANSWER :
A Variable is a container to store information. The information inside could be anything from any of the data types. 
It is used to refer to that value inside the variable at a later point.

*/


/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.

ANSWER :
*/

let number = 12
let anotherNumber = 20
let addNumbers = number + anotherNumber
console.log('Answer Q3 - number + anotherNumber is', addNumbers)


/* EXERCISE 4
Create a variable named x and assign to it the number 12.

ANSWER :
*/

let x
x = 12
console.log('Answer Q4 - x =', x)

/* EXERCISE 5
Create a variable called name and assign to it the string "John Doe".

ANSWER :
*/

let name = 'John Doe'
console.log('Answer Q5 - name is', name)


/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).

ANSWER :
*/

let subtract12 = x - 12
console.log('Answer Q6 - x minus 12 is', subtract12)


/* EXERCISE 7
Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
Verify that name1 is different from name2 (HINT: check their equality to be false).
Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).

ANSWER :
*/

let name1 = 'john'
let name2 = 'John'

console.log('Answer Q7 - Is name1 and name2 the same?',name1 === name2)
console.log('Answer Q7 -Is name1 and name2 the same if they are both lowercase?', name1.toLowerCase() === name2.toLowerCase())


/* EXERCISE 8
Create a variable named x, and assign to it a numeric value less than 10.
Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).

ANSWER :
RATHER THAN REDCLARING THE VALUE OF X I AM USING A NEW VARIABLE NAMED Y INSTEAD AS I HAVE ALREADY DECLARED X
*/

let y = 3

switch (y) {
    case 0:
        console.log('Answer Q8 - y is ZERO')
        break;
    case 1:
        console.log('Answer Q8 - y is ONE')
        break;
    case 2:
        console.log('Answer Q8 - y is TWO')
        break;
    case 3:
        console.log('Answer Q8 - y is THREE')
        break;
    case 4:
        console.log('Answer Q8 - y is FOUR')
        break;
    case 5:
        console.log('Answer Q8 - y is FIVE')
        break;
    case 6:
        console.log('Answer Q8 - y is SIX')
        break;
    case 7:
        console.log('Answer Q8 - y is SEVEN')
        break;
    case 8:
        console.log('Answer Q8 - y is EIGHT')
        break;
    case 9:
        console.log('Answer Q8 - y is NINE')
        break;
    default:
        console.log('Answer Q8 - Y IS NOT GREATER THAN 0 AND LESS THAN 10')
}


/* EXERCISE 9
[Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
try to search it by yourself, tomorrow morning we'll discuss it together!)

ANSWER :
*/



/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/

