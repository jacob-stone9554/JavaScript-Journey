//there is a fourth special kind of logical operator, the nullish coalescing operator.
//you can use this to assign a default value should a value to be assigned be null.
//it is ??

let a;
let b = 'b';

let result = a ?? b;

console.log(result); //a is null, so b is assigned.

//here is another example\

let fname = 'jacob';
let lname = 'stone';
let nickname;

console.log(fname ?? lname ?? nickname ?? 'Who are you?'); //using OR,since 2/3 values the first option is printed.

fname = null;
lname = null;

console.log(fname ?? lname ?? nickname ?? 'Who are you?'); //no value assigned, default to the string at the end.

//note that for numbers, 0 is not necessarily null.

