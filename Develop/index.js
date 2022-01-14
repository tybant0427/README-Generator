// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer'); 


// TODO: Create an array of questions for user input
//const questions = [];
inquirer.prompt([
    {
        type: 'input',
        name: 'GHname',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a brief description of your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license would you like?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How can a user install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'How can a user contribute to the repo?'
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What command can be used to run tests?',
        default: 'npm test'
    },

])
.then((answers) => {
    //console.log(answers);
    var readStr = writeToFile(answers);
    console.log(readStr);
    fs.writeFile('newReadMe.md', readStr, (err) => {
        if (err) {
            console.log(err);
        }
            console.log("Successful");
        })
})
.catch(err => {
    console.log(err);
})
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
