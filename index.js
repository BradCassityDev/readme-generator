const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "user",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please add a description of your project."
    }, 
    {
        type: "input",
        name: "license",
        message: "What license do you want your porject to have?"
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter the installation instructions."
    }, 
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information."
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines?"
    }, 
    {
        type: "input",
        name: "tests",
        message: "What information does the user need to know about tests?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    
}

// function to initialize program
function init() {
    return inquirerResponse = inquirer.prompt(questions);
}

// function call to initialize program
init()
.then(questionAnswers => {
    console.log(questionAnswers);
    writeToFile("README.md", questionAnswers);
})
.then(message => {
    console.log(message);
})
.catch(err => {
    console.log(err);
});
