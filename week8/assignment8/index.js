//1- Write a program that allow to user enter number then print it
console.log("Problem 1");

var x = +prompt("Enter a Number:");
console.log(x);

//2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
console.log("Problem 2");

x = +prompt("Enter a Number: ");
if (x % 3 == 0 && x % 4 == 0) {
  console.log("Yes");
} else {
  console.log("No");
}

// 3- Write a program that allows the user to insert 2 integers, then print the maximum of the two.
console.log("Problem 3");

x = +prompt("Enter a Number: ");
var y = +prompt("Enter a Number: ");

if (x > y) {
  console.log(x);
} else {
  console.log(y);
}

// 4- Write a program that allows the user to insert an integer, then prints "negative" if it is a negative number; otherwise, print "positive".
console.log("Problem 4");

x = +prompt("Enter a Number");
if (x < 0) {
  console.log("negative");
} else {
  console.log("positive");
}

// 5- Write a program that takes 3 integers from the user, then prints the maximum and minimum elements.
console.log("Problem 5");

x = +prompt("Enter a Number");
y = +prompt("Enter a Number");
var z = +prompt("Enter a Number");

var max = x;

if (max < y) {
  max = y;
}
if (max < z) {
  max = z;
}

console.log(max);

var min = x;

if (min > y) {
  min = y;
}
if (min > z) {
  min = z;
}

console.log(min);

// 6- Write a program that allows the user to insert an integer, then checks if the number is even or odd.
console.log("Problem 6");

x = +prompt("Enter a Number");

x % 2 ? console.log("Odd") : console.log("Even");

// 7- Write a program that takes a character from the user; if it is a vowel (a, e, i, o, u), print "vowel"; otherwise, print "consonant".
console.log("Problem 7");

x = prompt("Enter a character:");

if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
  console.log("vowel");
} else {
  console.log("constant");
}

// 8- Write a program that allows the user to insert an integer, then print all numbers from 1 to that number.
console.log("Problem 8");

x = +prompt("Enter a Number: ");
for (let i = 1; i <= x; i++) {
  console.log(i);
}

// 9- Write a program that allows the user to insert an integer, then prints a multiplication table up to 12 for that number.
console.log("Problem 9");

x = +prompt("Enter a Number:");
for (let i = 1; i <= 12; i++) {
  console.log(x + "x" + i + "=" + x * i);
}

// 10- Write a program that allows the user to insert a number, then print all even numbers from 1 to that number.
console.log("Problem 10");

x = +prompt("Enter a Number:");

for (let i = 1; i <= x; i++) {
  if (!(i % 2)) {
    console.log(i);
  }
}

// 11- Write a program that takes two integers from the user, then prints the result of the first number raised to the power of the second.
console.log("Problem 11");

x = +prompt("Enter a Number");
y = +prompt("Enter a Number");

console.log(x ** y);

// 12- Write a program to enter the marks of five subjects and calculate the total, average, and percentage.
console.log("Problem 12");

console.log("subject full mark is 100");

x = +prompt("Enter Subject Mark");
y = +prompt("Enter Subject Mark");
z = +prompt("Enter Subject Mark");
var a = +prompt("Enter Subject Mark");
var b = +prompt("Enter Subject Mark");

var average = (x + y + z + a + b) / 5;
var sum = x + y + z + a + b;

console.log("Total = ", sum);
console.log("Average = ", average);
console.log("Percentage = ", (sum / 500) * 100, " %");

// 13- Write a program to input a month number and print the number of days in that month.
console.log("Problem 13");

x = +prompt("Enter a month Number");

if (
  x === 1 ||
  x === 3 ||
  x === 5 ||
  x === 7 ||
  x === 8 ||
  x === 10 ||
  x === 12
) {
  console.log("31 days");
} else if (x === 4 || x === 6 || x === 9 || x === 11) {
  console.log("30 days");
} else if (x === 2) {
  console.log("28 days");
} else {
  console.log("No such month");
}

// 14- Write a program to input marks for Physics, Chemistry, Biology, Mathematics, and Computer; then calculate the percentage and grade based on the percentage:
//     - Percentage >= 90%: Grade A
//     - Percentage >= 80%: Grade B
//     - Percentage >= 70%: Grade C
//     - Percentage >= 60%: Grade D
//     - Percentage >= 40%: Grade E
//     - Percentage < 40%: Grade F
console.log("Problem 14");

console.log("Enter marks for each subject (full mark is 100)");

x = +prompt("Enter Physics Mark:");
y = +prompt("Enter Chemistry Mark:");
z = +prompt("Enter Biology Mark:");
a = +prompt("Enter Mathematics Mark:");
b = +prompt("Enter Computer Mark:");
sum = x + y + z + a + b;
var percentage = (sum / 500) * 100; // Assuming each subject is out of 100
var grade;

if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else if (percentage >= 40) {
  grade = "E";
} else {
  grade = "F";
}

console.log("Percentage =", percentage + "%");
console.log("Grade =", grade);

// ************************ Using switch case ************************

// 15- Write a program to print the total number of days in a month.
console.log("Problem 15");

x = +prompt("Enter a month number (1-12):");

switch (x) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 days");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 days");
    break;
  case 2:
    console.log("28 days (29 days in a leap year)");
    break;
  default:
    console.log(
      "Invalid month number. Please enter a number between 1 and 12."
    );
}

// 16- Write a program to check whether an alphabet is a vowel or consonant.
console.log("Problem 16");

x = prompt("Enter an alphabet character:").toLowerCase();

switch (x) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("vowel");
    break;
  default:
    console.log("consonant");
}

// 17- Write a program to find the maximum between two numbers.
console.log("Problem 17");

x = +prompt("Enter the first number:");
y = +prompt("Enter the second number:");

switch (true) {
  case x > y:
    console.log("The maximum number is:", x);
    break;
  case y > x:
    console.log("The maximum number is:", y);
    break;
  default:
    console.log("Both numbers are equal.");
}

// 18- Write a program to check whether a number is even or odd.
console.log("Problem 18");

x = +prompt("Enter a number:");

switch (x % 2) {
  case 0:
    console.log("Even");
    break;
  case 1:
    console.log("Odd");
    break;
}

// 19- Write a program to check whether a number is positive, negative, or zero.
console.log("Problem 19");

x = +prompt("Enter a number:");

switch (true) {
  case x > 0:
    console.log("Positive");
    break;
  case x < 0:
    console.log("Negative");
    break;
  default:
    console.log("Zero");
}

// 20- Write a program to create a Simple Calculator.
console.log("Problem 20");

x = +prompt("Enter the first number:");
y = +prompt("Enter the second number:");
let operation = prompt("Enter an operation (+, -, *, /):");

switch (operation) {
  case "+":
    console.log("Result:", x + y);
    break;
  case "-":
    console.log("Result:", x - y);
    break;
  case "*":
    console.log("Result:", x * y);
    break;
  case "/":
    console.log("Result:", x / y);
    break;
  default:
    console.log("Invalid operation.");
}
