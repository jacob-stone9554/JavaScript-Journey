//Objects can be used to store more complex entities that things like bool, string, Number, etc.
//In javascript, objects are pretty much everywhere
//an object has a list of properties. Think key-value pairs. Think of an object like a box
//you can put things into and take things out of it.

//an empty object can be created one of two ways:

let user = new Object(); //constructor syntax
let altUser = {}; //object literal syntax

console.log(typeof altUser); //we can see that this is an object

console.log(""); //making whitespace


//an object's properties are represented by key-value pairs

//creating a 'person' with a first and last name as well as an age
let person = {
    fName: "John",
    lName: "Doe",
    age: 21
};

//displaying that info
console.log("Name: " + person.fName + " " + person.lName);
console.log("Age: " + person.age);

console.log(""); //making whitespace


//we can remove a property from an object if we want:

delete person.age;

console.log(person.age); //this no longer exists, it is undefined.

//if you want, object properties can have spaces but they must be quoted (If you really wanted to do this??)
//ex => 'is a cool guy': true
//dot notation doesn't work, you need to do something like console.log(person["is a cool guy"]);

let age = 21;
let mInitial = "X";

person["age"] = age;//putting a value back in age
person["mInitial"] = mInitial; //making a new one?

console.log(person["age"]);
console.log(person["mInitial"]);//display the new value

console.log(""); //whitespace

//there exists a shorthand when creating an object
//instead of name: name or price: price, if the parameters are the same, list them once

function makeProduct(name, descr, price) {
    return {
        name,
        descr,
        price
    };
}

let apple = makeProduct("Apple", "A sweet red fruit", 4.99);

console.log("Name: " + apple.name);
console.log("Description: " + apple.descr);
console.log("Price: " + apple.price);

console.log(""); //whitespace

//there are no limitations on what you can name object properties. If you wanted to, they could start with letters or symbols (why though?)


//you can check to see if an object  has a property with the 'in' clause

console.log("name" in apple);//returns true, signifying the existence of the property
console.log("asdfas" in apple);//returns false signifying that the property does not exist

console.log(""); //whitespace


//you can loop through all properties in an object with the for ... in ... loop

for(let key in apple){
    console.log(key);
    console.log(apple[key]);
}

console.log(""); //whitespace

