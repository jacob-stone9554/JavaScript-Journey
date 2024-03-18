//functions have what we call declarations. This is the standard way of creating a function, ex => function showMessage()...
//There is another way to create a function called function expressions
//function expressions allow us to create a new function in the middle of any expression

//example of function expression. In a way, it lets us treat functions like variables
let showMessage = function(){
    console.log("Hello World!");
};

console.log(showMessage);//shows that showMessage is a function
showMessage();

// additionally, you can assign functions to variables

function helloWorld(){
    console.log("Hello World");
}

let func = helloWorld;

func();


//with this in mind, you can pass entire functions as parameters in other functions




