//sometimes you will not receive input from the browser
//if that is the case, use something like the code below:

//create the input interface
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//ask a question, use the output.
readline.question("What is your name? ", name => {
    console.log(`Hello, ${name}!`);
    readline.close();
})

//note that in order to run this, you need to have Node installed and 
//      the code must be initiated from the terminal.
//you can do this by running this command: node 'fileName.js'



