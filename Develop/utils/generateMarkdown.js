
// TODO: Create a function to generate markdown for README
function generateMarkdown(promptUser) {
  return `
  # ${promptUser.title}

  # Table of Content
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[license](#license)
  -[contribution](#contribution)
  -[test](#test)
  -[github](#github)
  -[profile](#profile)
  
  ${promptUser.github}
  ##github:
  
      ${promptUser.description}
  ##description:
  
      ${promptUser.installation}
  ##installation:
  
      ${promptUser.usage}
  ##usage:
  
      ${promptUser.license}
  ##licenses:
  
      ${promptUser.contribution}
  ##contribution:
  
      ${promptUser.test}
  ##test:
  
      ${promptUser.email}
  ##email:
  
      ${promptUser.username}
  ##profile:
  `;
}

module.exports = generateMarkdown;
