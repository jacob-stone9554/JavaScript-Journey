//it is important to note that objects are stored by reference and copied by reference.
//in contrast, primitives are copied by value

let user = {
    name: 'John'
};

let adminUser = user;

console.log(adminUser.name);

console.log("");//whitespace

user.name = 'Joey';

console.log(adminUser.name); //even though we changed user's name, since user and admin reference the same memory location, the change is reflected in both.

console.log("");//whitespace

//if you are comparing objects, it will only return true if both objects reference the same memory location (have the same reference)

let guestUser = {
    userName: "Matt"
};

if(user == guestUser){
    console.log("Weird."); //won't return true
} 
else if(user == adminUser){
    console.log("Same reference!"); //will return true
}

//if we really need to duplicate an object, we can clone it

