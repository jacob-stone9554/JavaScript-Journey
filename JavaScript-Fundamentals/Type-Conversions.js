//most of the time operators and functions will automatically assign the correct type
//we can also manually convert the type of a variable.

//string conversions

//intially a boolean
let value = true;
console.log(typeof value);

//cast the boolean as a string
value = String(value);
console.log(typeof value);


//numeric conversions in math functions happen automatically
console.log("3" / "2");

//you can also cast as Number(value) to do this explicitly
let str = "123";
console.log(typeof str);

let num = Number(str);
console.log(typeof num);


//boolean conversions also exist.
//if a value is anything except the default, it becomes true. Otherwise false
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("Hello!"));
console.log(Boolean(""));

