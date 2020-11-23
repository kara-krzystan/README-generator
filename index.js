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
        message: '',
    },
    {
        type: 'input',
        name: 'contents',
        message: '',
    },
    {
        type: 'input',
        name: 'installation',
        message: '',
    },
    {
        type: 'input',
        name: 'usage',
        message: '',
    },
    {
        type: 'input',
        name: 'features',
        message: '',
    },
    {
        type: 'input',
        name: 'tests',
        message: '',
    },
    {
        type: 'input',
        name: 'license',
        message: '',
    },
    {
        type: 'input',
        name: 'contact',
        message: '',
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
