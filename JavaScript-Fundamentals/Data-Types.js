//in javascript, a value is always of a certain type
//additionally, javascript is dynamically typed
//that means you can put any type into a variable
//for example, one moment it can be a string and the next a number

//the number represents integer AND floating point values.
let n = 123;
n = 123.456;

console.log(n);


//a string is a combination of characters surrounded by quotation marks
let s = "hello";
let embeddedStr = `You can put strings inside strings: ${s} world!`;

console.log(embeddedStr);


//boolean is true false
//you can assign it directly or allow a logical statement to be evaluated
let bool = true;
let isGreater = 4 > 1;

console.log(isGreater);



//if a variable never receives a value, it has the type 'undefined'
let u;

console.log(u);


//you can use the typeof operator to see a variables type

typeof isGreater;

