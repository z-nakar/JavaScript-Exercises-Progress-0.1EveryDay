
/* Write a JavaScript program that calculates multiplication and division of 2 numbers. */

function convert(){
    let num1 = parseInt(prompt("Enter first number : "))
    let num2 = parseInt(prompt("Enter second number : "))

    let multiply = num1 * num2;
    let divide = num2 !== 0 ? num1 / num2: "Cannot divide with zeros"; //using ternary operator. if num2 is not equal 0 then num1 divide num2. else "cannot divide with zeros"

    alert(`The multiplication of ${num1} and ${num2} is ${multiply}`);
    alert(`The division of ${num1} and ${num2} is ${divide}`);
}
