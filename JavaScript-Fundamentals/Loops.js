//we will often need to repeat actions
//we can achieve this through looping

//the while loop
//you can use it to repeat a block of code for an unlimited amount of times as long as a condition is true;
//this loop just counts to 10. when it gets to 10, condition becomes false, the loop is broken out of.

//note that the condition is checked, THEN the body executes
let condition = true;
let n = 0;

while(condition){
    n++;
    console.log(n);

    if(n == 10){
        condition = false;
    }
}

console.log("");//whitespace

//if necessary, you can execute the body first then check the condition
//this is achieved with the do-while loop.

n = 0;
condition = true;

do{
    n++;
    console.log(n);

    if(n == 10){
        condition = false;
    }
} while(condition);

console.log("");//whitespace

//note that if necessary, you can immediately break out of a loop using the break; statement.
//this is useful when searching for an item or value

//the for loop. create a number, while the number doesn't meet a condition, iterate once every pass through

for(let i = 0; i < 10; i++){
    console.log(i);

    if(i == 5){
        console.log("we found 5");
        break;
    }
}


