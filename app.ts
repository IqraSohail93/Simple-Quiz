import inquirer from "inquirer";
console.log("Welcome to the Typescript Quiz:")
console.log("You are required to gain 4 points to win this quiz.")
let points = 0
// Question 1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "What is TypeScript primarily used for?",
        type: "list",
        choices: ["Memory Management","Dynamic Typing","Static Typing","Asynchronous operations"]
    }
])
if (question1.one == "Static Typing"){
    console.log("Your answer is correct")
    points++
}else ("Your answer is incorrect")
// Question 2 
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "Which of the following is NOT a valid TypeScript data type??",
        type: "list",
        choices: ["void","Dynamic","any","tuple"]
    }
])
if (question2.two == "Dynamic"){
    console.log("Your answer is correct")
    points++
}else ("Your answer is incorrect")
// Question 3 
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "How do you denote a variable as readonly in TypeScript?",
        type: "list",
        choices: ["const","static","readonly","fixed"]
    }
])
if (question3.three == "readonly"){
    console.log("Your answer is correct")
    points++
}else ("Your answer is incorrect")
// Question 4
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "How do you specify that a function does not return anything in TypeScript?",
        type: "list",
        choices: ["function myFunc(): undefined","function myFunc(): void","function myFunc(): null","function myFunc(): None"]
    }
])
if (question4.four == "function myFunc(): void"){
    console.log("Your answer is correct")
    points++
}else ("Your answer is incorrect")
// Question 5 
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "How do you define a custom type in TypeScript?",
        type: "list",
        choices: ["interface","typedef","type","Both A and C"]
    }
])
if (question5.five == "Both A and C"){
    console.log("Your answer is correct")
    points++
}else ("Your answer is incorrect")
// Question 6
let question6 = await inquirer.prompt([
    {
        name: "Six",
        message: "What is the primary purpose of TypeScript interfaces?",
        type: "list",
        choices: ["To create new classes","To describe the shape of an object","To generate HTML templates","To manage asynchronous code"]
    }
])
if (question6.six == "To describe the shape of an object"){
    console.log("Your answer is correct")
    points++
}else ("Your answer is incorrect")

//Output Conditions
if (points >= 4) {
    console.log("Congratulations!")
    console.log(`You scored ${points}`)
}else {
    console.log("You loss! Try next time")
    console.log(`You scored ${points}`)
}

