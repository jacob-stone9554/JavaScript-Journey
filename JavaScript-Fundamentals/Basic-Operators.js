//this module covers basic mathematical operations in javascript
//unary, binary operations

//an operand is something a math operation is carried out on, typically a variable
//an operator is something that carries out that math operation (like addition)
//if an operator has a single operand, it is a "unary" operator
//if an operator has two operands, it is a "binary" operator


let x = 1;
x = -x;//unary operation, only one operand
console.log(x);

let y = 1, z = 2;
console.log(z - y);//binary operation, two operands involved

//most math operations are the same as other programming languages
//notably, you can use ** to exponentiate

console.log(2 ** 2);//2^2
console.log(2 ** 3);//2^3

//you can concatenate strings with +
//this is considered a binary operation
//if any operations involved in string concatenation, they will be treated as strings.

let s = "Hello " + "World!";
console.log(s);

//additionally, you can convert data types using +
console.log(+true);
console.log(+"");

//there is a precedence for operations, with unary addition and subtraction being the highest
//followed by standard order of operations.





