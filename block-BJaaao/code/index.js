// Using alert, prompt, confirm and console

/*

1. Do the following using `alert` function. When you find any square bracket
 replace that to the value of the variable.

*/

let num1 = 21;
let num2 = 32;

/*
- Create a variable named `language` and store the value of `JavaScript` in it

- Alert message saying `I am learning [language]`
- Alert `
]`
- Alert `The sum of [num1] and [num2] is [num1 + num1]`
*/
let language = " Javascript";
alert(`I am learning ${language}`);
alert(`The value of num1 is ${num1} and
    the value of num2 is ${num2}`);
alert(`The sum of ${num1} and ${num2} is =
    ${num1 + num2}`);

/*
2. Do the following using `alert`, `prompt` and `confirm` and `console`

- Using prompt accept the name of the user and store it a variable names `userName`
- Using prompt accept the profession of the user and store it a variable names`userProfession`
- Using confirm check if user is adult or not and store the value in `isAdult`
- Alert message `I am [userName] a [userProfession]`
- Log the message `I am [userName] a [userProfession]`
- Alet message `Username: [userName]
Adult: [isAdult]
Profession: [userProfession]` (it should be in three different lines)
- Log the message using console.log `Username: [userName]
Adult: [isAdult]
Profession: [userProfession]` (it should be in three different lines)
*/

let userName = prompt("what is your name");
let userProfession = prompt("let me know your Profession");
let isAdult = confirm("are you aged 18+ ?");
alert(`I am ${userName} a ${userProfession}`);
console.log(`I am ${userName} a ${userProfession}`);
alert(`Username: ${userName}
   Adult: ${isAdult}
   Profession: ${userProfession}`);
console.log(`Username: ${userName}
   Adult: ${isAdult}
   Profession: ${userProfession}`);

/*
. Addition using prompt

  - Accept two number values form user and store them in `numA` and`numB`.
  - Alert the sum of both numbers. [numA + numB]
  - Alert [numA - numB]
  - Alert [numA * numB]
  - Log using console.log [numA - numB]
  - Log using console.log [numA * numB]
*/

let numA =Number(prompt("enter the any number"));
let numB =Number(prompt("enter the second number"));
alert(`The sum of both numbers ${numA + numB}`);
alert(`The sub of both numbers ${numA - numB}`);
alert(`The product of both numbers ${numA * numB}`);
console.log(`The sub of both numbers ${numA - numB}`);
console.log(`The product of both numbers ${numA * numB}`);


