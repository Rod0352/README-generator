// template for promtUser() input to generate Readme file
function generateMarkdown(promptUser) {
  return `
  <h1 align="center">${promptUser.title} </h1>
  
![badge](https://img.shields.io/badge/license-${promptUser.license}-brightgreen)<br />
## Description
 ${promptUser.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [contribution](#contribution)
- [Test](#test)
- [Questions](#questions)
## Installation
 ${promptUser.installation}
## Usage
 ${promptUser.usage}
## License
![badge](https://img.shields.io/badge/license-${promptUser.license}-brightgreen)
<br />
This application is covered by the ${promptUser.license} license. 
## contribution
 ${promptUser.contribution}
## Test
${promptUser.test}
## Questions
 ${promptUser.questions}<br />
<br />
 My GitHub: [${promptUser.username}](https://github.com/${promptUser.username})<br />
<br />
 Email me with any questions: ${promptUser.email}<br /><br />
This README was generated with [README-generator](https://github.com/Rod0352/README-generator)
  `;
}

module.exports = generateMarkdown;
