//comparisons can be used to control the flow of your application and assign boolean variables based on existing values

//comparisons can be used to assign to a boolean
let result = 5 > 4;
console.log(result);

//you can also compare strings. Behind the scenes, the unicode values of each character in the string is evaluated and compared
let str1 = 'Glow';
let str2 = 'Glee';

console.log(str1 > str2);

//similarly, types will convert automatically to make an appropriate comparison
console.log('2' > 1);// true, string '2' converts to Number 2


//strict equality
//the standard == evaluator doesn't know the difference between '0' and false, or '1' and true
//to get around this issue, you might need to use the === evaluator

console.log('0' == false); //evaluates to true
console.log('0' === false); //evaluates to false

//I should also note, with the strict operator null != undefined. 
console.log(null == undefined); //evaluates to true
console.log(null === undefined); //evaluates to false

