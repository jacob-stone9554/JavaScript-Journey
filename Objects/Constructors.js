//constructors can be used as a template to create objects easier
//they behave like a function

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let newUsr = new User("Jake");
console.log("Username: " + newUsr.name + "\nIs Admin: " + newUsr.isAdmin);

console.log(""); //whitespace

console.log(typeof newUsr); //we see that it is indeed an object