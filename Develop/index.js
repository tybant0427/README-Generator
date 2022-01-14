// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer'); 
const generateMarkdown = require('./utils/generateMarkdown');


const questions = () => {
// TODO: Create an array of questions for user input
//const questions = [];
return inquirer.prompt([
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
        message: 'Please give a brief description of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license would you like?',
        choices: ["Skip", "ISC", "MIT", "Apache-2.0", "Gpl-3.0"]
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
    }

]);
};

const writeFile = readStr => {
    fs.writeFile('newReadMe.md', readStr, (err) => {
        if (err) {
            console.log(err);
        }
            console.log("Successful");
        })
};

// function call to initialize program
questions()
// getting user answers 
.then(answers => {
    return generateMarkdown(answers);
})
// using data to display on page 
.then(readStr => {
    return writeFile(readStr);
})
// catching errors 
.catch(err => {
    console.log(err)
})












