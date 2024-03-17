//functions allow us to perform the same action whenever needed without having to re-write all the code.
//they are extremely useful in this sense.

//a function must be declared, with any parameters in its declaration
function showMessage(){
    console.log("Hello World!");
}

showMessage();//calling the function

console.log("");//whitespace

//a function can also have its own local variables.
//these cannot be referenced from outside the function
//with that in mind though, a function can access any outer variables it might want
function showNewMessage(){
    let message = "Hi Planet!";
    console.log(message);
}

showNewMessage();

console.log("");//whitespace

//sometimes a function will have things it needs to operate. These are called parameters
function parameterMessage(from, text){
    console.log(from + ': ' + text);
}

parameterMessage('Jake', "Hey what's up??");

//if a parameter is not provided, the value will be assigned a default. you can specify this if you want
//for example => parameterMessage(from, text = 'no text given'){}

//functions can also return values after performing operations:

function exponentiateMe(n, power){
    let result = n**power;
    return result;
}

let x = exponentiateMe(2, 3);

console.log(x);

console.log("");//whitespace


//functions are verbs, so you should name them as such.
//variables are nouns, so you should name them as such.
//additionally, a function should only be responsible for a single action/goal. nothing more

//breaking what could be one function into two separate functions:
function showPrimes(n){
    for(let i = 2; i < n; i++){
        if(!isPrime(i)) continue;

        console.log(i);
    }
}

function isPrime(n){
    for(let i = 2; i < n; i++){
        if (n % i == 0) return false;
    }

    return true;
}


showPrimes(56);