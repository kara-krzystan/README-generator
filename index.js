const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project Title? (Required)',
        validate: titleInput => {
            if (titleInput) {
              return true;
            }
              else {
                  console.log('Please enter your Project Title');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Add your Project Description'
    },
    // {
    //     type: 'input',
    //     name: 'contents',
    //     message: 'Would you like to include a Table of Contents? If so, ',
    // },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install your application'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions, helpful tips, examples, demos and/or screenshots here'
    },
    {
        type: 'input',
        name: 'features',
        message: 'Describe additional features (optional)'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests for your application? If so, include them here'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license type',
        choices: ['', '', '', '',]
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'If users have questions or comments, can they contact you? If yes, enter your contact information here',
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
