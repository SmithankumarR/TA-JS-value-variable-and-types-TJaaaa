// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = Number(prompt("enter the number"));
if (number % 2 === 0) {
  console.log("${number} is even");
  alert(`${number} is even`);
}
if (number % 2 !== 0) {
  console.log("${number} is odd");
  alert(`${number} is odd`);

}



// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let number_1 = Number(prompt("enter the number"));
let number_2 = Number(prompt("enter the number"));
if (number_1 > number_2) {
  console.log(" number1 is maximum");
  alert(`maximum number is ${number_1}`);
}
else {
  console.log("number2 is maximum");
  alert(`maximum number is ${number_2}`);

}

// 3. Convert the above code using`?` terniary operator

number_1 > number_2 ? alert(`${number_1} is maximum`) : alert(`${number_2} is maximum`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let house_Name = prompt("what is your house name");
if (house_Name === "stark") {
  console.log("winter is coming");
}
else if (house_Name === "lannister") {
  console.log(" A lannister always pays his debt");
}
else {
  console.log("All men must die");
}

// // 5. Convert the above code using`?` terniary operator
house_Name == "stark" ? console.log("winter is coming") : house_Name == "lannister" ? console.log(" A lannister always pays his debt") : console.log("All men must die");

// Switch
switch (true) {
  case 1: (house_Name == "stark")
    console.log("winter is coming");
    break;
  case 2: (house_Name == " lannister")
    console.log("A lannister always pays his debt");
  default:
    console.log("All men must die");

}


// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = Number(prompt("enter the number of the month(1 - 12)"));
switch (month) {
  case 1:
    console.log("jan has 31 days");
    break;
  case 2:
    console.log("feb has 28 days");
    break;
  case 3:
    console.log("mar has 31 days");
    break;
  case 4:
    console.log("apr has 30 days");
    break;
  case 5:
    console.log("may has 31 days");
    break;
  case 6:
    console.log("june has 30 days");
    break;
  case 7:
    console.log("july has 31 days");
    break;
  case 8:
    console.log("aug has 31 days");
    break;
  case 9:
    console.log("sep has 30 days");
    break;
  case 10:
    console.log("oct has 31 days");
    break;
  case 11:
    console.log("nov has 30 days");
    break;
  case 12:
    console.log("dec has 31 days");
  default:
    console.log("error enter again");

}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let user_Salary = Number(prompt("enter your salary"));
switch (true) {
  case user_Salary <= 20000:
    let inhand_Amount = (user_Salary * 10) / 100;
    alert(`your in-hand-salary is ${inhand_Amount}`);
    break;
  case user_Salary <= 40000:
    let inhand_Amount1 = (user_Salary * 20) / 100;
    alert(`your in-hand-salary is ${inhand_Amount1}`);
    break;
  case user_Salary > 50000:
    let inhand_Amount2 = (user_Salary * 30) / 100;
    alert(`your in-hand-salary is ${inhand_Amount2}`);
    break;
  default:
    alert(`not a valid code`);
}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("enter the marks"));
if (marks > 100) {
  alert`Marks can't be greater than 100`;
}
else if (marks > 80 && marks < 100) {
  alert(`Grade A`);

}
else if (marks > 50 && marks < 80) {
  alert(`Grade B`);

}
else if (marks > 30 && marks < 50) {
  alert(`Grade C`);

}
else if (marks > 20) {
  alert(`Grade D`);

}
else {
  alert`fail`;
}

switch (true) {
  case marks > 100:
    alert`Marks can't be greater than 100`;
    break;
  case (marks > 80 && marks < 100):
    alert(`Grade A`);
    break;
  case marks > 50 && marks < 80:
    alert(`Grade B`);
    break;
  case marks > 30 && marks < 50:
    alert(`Grade c`);
    break;
  case marks > 20:
    alert(`Grade d`);
    break;
  default:
    alert(`fail`);
}



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = String(prompt("What is the weather like outside?"));
switch (weather) {
  case "sunny":
    alert(`Wear a T-shirt`);
    break;
  case "rainy":
    alert(`Don't forget to take your raincoat`);
    break;
  case "hot":
    alert(`Get a hanky`);
    break;
  case "freezing":
    alert(`Get your sweeter on`);
    break;
  default:
    alert(`Not a valid input`);
    break;
}