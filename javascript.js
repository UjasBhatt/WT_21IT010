const num1 = parseInt(prompt("Enter 1:"))
const num2 = parseInt(prompt("Enter 2:"))

// add two numbers
const sum = num1 + num2;
const mul = num1 * num2;
const div = num1 / num2;
const sub = num1 - num2;

// display the sum
console.log(sum);
console.log(mul)

document.write("Sum of two numbers is " + sum);
document.write("<br>");
document.write("Mul of two numbers is " + mul);
document.write("<br>");
document.write("Div of two numbers is " + div);
document.write("<br>");
document.write("Sub of two numbers is " + sub);
document.write("<br>");

const num3 = parseInt(prompt("Enter base:"))
const num4 = parseInt(prompt("Enter power:"))

const x = Math.pow(num3, num4);
document.write("Ans of two numbers is " + x);
document.write("<br>");

const num5 = parseInt(prompt("Enter Number For Square Root:"))
const y = Math.SQRT2(num5);
document.write("Ans of two numbers is " + y);
document.write("<br>");