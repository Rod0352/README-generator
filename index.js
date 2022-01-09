// require 'Inquirer' module
const inquirer = require('inquirer');
const fs = require('fs');
// link input to template
const generateMarkdown = require('./Develop/utils/generateMarkdown');
// prompt user for readme input
const promptUser = () => {
    return inquirer.prompt([

        {
            type: "input",
            name: "title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use this app?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contribution",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "test",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
};
promptUser()
    .then(data => {
        const pageMd = generateMarkdown(data);

        fs.writeFile('./dist/Readme.md', pageMd, err => {
            if (err) throw err;
            console.log('ReadMe complete! Check out readme.md to see the output');
        });
    });