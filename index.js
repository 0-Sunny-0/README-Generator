// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // Question 1
    {
        type: "input",
        message: "What is your Github username?",
        name: "userName"
    },
    // Question 2
    {
        type: "input",
        message: "What is your email address?",
        name: "userEmail"
    },
    // Question 3
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    // Question 4
    {
        type: "input",
        message: "Write a short description about your project.",
        name: "description"
    },
    // Question 5
    {
        type: "list",
        message: "What type of license would you like to assign to your project?",
        name: "license",
        choices: [
            "APACHE 2.0", 
            "Eclipse 1.0", 
            "IBM 1.0", 
            "MIT", 
            "WTFPL", 
            "None"
        ]
    },
    // Question 6
    {
        type: "input",
        message: "What command should be use to run the dependencies?",
        name: "command"
    },
    // Question 7
    {
        type: "input",
        message: "Will there be a command for testing?",
        name: "test"
    },
    // Question 8
    {
        type: "input",
        message: "What usage information does a user need to know?",
        name: "usage"
    },
    // Question 9
    {
        type: "input",
        message: "What information is needed for contributing to your repo?",
        name: "contributing"
    },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('File has been created!')
    })
}
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data))
        
        })
}

// Function call to initialize app
init();
