//another way of creating functions is with arrow syntax. These are sometimes called 'lambdas'
//these can be more conscise than other methods.

//an example of an arrow function
let sum = (a, b) => a + b;

console.log(sum(1, 2));

console.log("");//whitespace

//another example:
let double = (a) => a * 2;

console.log(double(9));

console.log("");//whitespace

//this example will display a message depending on the value of age.
let age = 19;

let welcome = (age < 18) ? 
    () => console.log("Hello, you're not an adult") :
    () => console.log("Hello, you're an adult!");

welcome();

console.log("");//whitespace

//if you have multiple lines that go into an arrow function you need to put them in {}
let newSum = (a, b) => {
    let result = a + b;
    return result;
}

let number = newSum(2, 2);
console.log(number);