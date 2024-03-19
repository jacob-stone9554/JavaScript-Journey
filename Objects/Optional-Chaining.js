//sometimes we will try to access nested components of an object
//ex => user.name.first
//if this doesn't exist, it could cause problems. We can get around this with careful use of the ? operator


let user = {};
//console.log(user.name.first); //you cannot access a property of 'undefined', this will throw an error

//instead, chain the optional '?' operator to define the nested properties as undefined

console.log(user?.name?.first); //this sets them as undefined instead, which lets us continue without breaking the app

//please note that you should ONLY do this where it is okay that something doesn't exist.

//optional chaining short circuits the execution. If the first item in the chain is undefined, there is no need to look at the rest



