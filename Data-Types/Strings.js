//in javascript, contextual data is stored as strings. there is no char data type.
//the internal format is always UTF-16, not tied to the encoding of the web page.

//strings can be made with '', "", or ``.
let singleQuote = 'made with one quote';
let doubleQuote = "made with double quotes";

//`` allow you to use string interpolations
let backtick = `made with backticks`;

//below is an example of string interpolation
function sum(a, b) {
    return a + b; //return the sum
}

//insert the results of sum() in the ${}
console.log(`1 + 2 = ${sum(1, 2)}.`);

//note that with backticks you can span multiple lines.

//note that strings are immutable. They cannot be changed once they are created.

//searching for a substring
let str = 'Widget with id';

console.log(str.indexOf('Widget'));
console.log(str.indexOf("id"));