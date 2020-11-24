const fs = require('fs');

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  * [Project Description](#description)
  * [Project Links](#link)
  * [Installation Instructions](#installation)
  * [Usage](#usage)
  * [Features](#features)
  * [Tests](#tests)
  * [Credits](#credits)
  * [How to Contribute to this Project](#contribute)
  * [Contact the Developer](#contact)
  * [License](#license) 

  ## Description
  ${data.description}

  ## Project Links
  ${data.link}

  ## How to Install
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Features
  ${data.features}

  ## Tests
  ${data.tests}

  ## Credits
  ${data.credits}

  ## Contribute to this Project
  ${data.contribute}

  ## Contact
  ${data.contact}

  ## License
  ${data.license}

`;
}

module.exports = generateMarkdown;

// put markdown outline inside function?
// make table of contents autofill?
// make a link?