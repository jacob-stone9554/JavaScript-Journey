//conditional statements can determine the flow of your application.
//we achieve this using the if and ? operators

//the if statement. if condition is true, block executes. Otherwise, it is skipped
let num1 = 5;
let num2 = 4;

if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
}


//you can put a boolean variable in the condition for an if statement
let isTrue = true;

if(isTrue){
    console.log("It's true!");
}


//if the main block is not executed, we can add a secondary block that will execute if the first one isnt
//we do this using the else statement
let num3 = 50;

if(num1 > num3){
    console.log(`${num1} is greater than ${num2}`)
}
else {
    console.log(`${num1} is not greater than ${num3}`);
}

//if needed, you can add an if statement to an else creating an if-elseif block.
//you can chain as many of these together as you want for however many evaluations you need.


//you can use the ? operator in place of an if statement to assign a variable depending on a condition.
let age = 18;

let result = (age >= 18) ? true : false;

if(result){
    console.log("You are an adult!");
}
else {
    console.log("You are not an adult!");
}


//here is another example of the ? operator, this time with multiple conditions

let days = 14;

let message = (days == 7) ? '1 week' : 
    (days == 14) ? '2 weeks' :
    (days == 21) ? '3 weeks' :
    (days == 28) ? 'Not quite a month' : 
    'I am not sure';

console.log(message);


//you can also use ? in place of an if block

let dollars = 100;

(dollars == 100) ? 
    console.log("You're rich!") : console.log("You're broke!");

    