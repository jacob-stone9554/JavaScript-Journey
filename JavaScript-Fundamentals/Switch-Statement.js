//you can use the switch statement in place of an if else if block.
//the switch block contains one or more cases and a default.

let a = 2 + 2;

switch(a) {
    case 3:
        console.log('Not 4.');
        break;
    case 4:
        console.log('Four exactly!');
        break;
    case 5:
        console.log('Not 4.');
        break;
    default:
        console.log("I don't know what that is...");
}

console.log("");//whitespace

//if necessary, you can also group cases that will have the same output:

switch(a){
    case 4:
        console.log("Four exactly!");
        break;
    case 3:
    case 5:
        console.log("That is not 4.");
        break;
    default:
        console.log("I am not sure what you mean...");
}

//note that data type matters when you are using switch statements. ex => checking strings and having a case that is a Number type



