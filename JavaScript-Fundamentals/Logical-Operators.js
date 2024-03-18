//we can use logical operators to further refine the conditions we have in if statements
//three main types, || OR, && AND, and ! NOT

//|| OR -> if any of these are true, the statement is true
let bool1 = true;
let bool2 = false;

result = bool1 || bool2;

console.log(result); 

//&& AND -> if both of these are true, the statement is true
result = bool1 && bool2;
console.log(result);


//! NOT -> you can use this to logically invert a boolean. Alternatively, you can use it to evaluate equality.
console.log(!result);

