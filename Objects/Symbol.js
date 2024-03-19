//only two primitive types are allowed to represent object property keys
//string type and symbol type
//if something other than a string is entered, and it is not a symbol, it is automatically translated to a string
//ex let obj[true] = {}; would tranlsate to obj["true"]

//a symbol represents a unique identifier.

let id = Symbol();
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); //returns false, even tho their symbols have the same symbol name, they are different objects

console.log(id1); //disply that it is a symbol, and its symbol description

console.log(""); //whitespace

//symbols let us create "hidden" object properties that we can't accidentally overwrite

let user = {
    name: "Jake",
    age: 21
};

let temp = Symbol("id");

user[temp] = 1; //ordinarily, I would name this id. I've used id 3 times already, i changed it for clarity

console.log(user[temp]);


//you can also set Symbols in object literals
let game = Symbol();

let obj = {
    prop1: "King",
    prop2: "Queen",
    [game]: "Chess"
};

console.log(obj[game]); //display the symbol

