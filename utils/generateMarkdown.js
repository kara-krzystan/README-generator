const fs = require('fs');

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description:
  ${data.description}

  ## How to Install
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Features
  ${data.features}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}

  ## Contributing
  ${data.contribute}

  ## Project Links
  ${data.link}

  ## Contact
  ${data.contact}

`;
}

module.exports = generateMarkdown;

// put markdown outline inside function?
// make table of contents autofill?