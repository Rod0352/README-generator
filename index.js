// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const promptUser = () => {
    return inquirer.prompt([
        
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'project',
            message: 'Enter the name of your Project:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide description of Project:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter Github usernamew:'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (check all that appy)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project. (Required)'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage for application'
        }
    ]);
    console.log(promptUser);
};
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
promptUser();