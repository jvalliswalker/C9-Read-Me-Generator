// Variables
const inquirer = require('inquirer');
const fs = require('fs');

const outputPath = './output';
const fileNameAndPath = `${outputPath}/README.md`;

// title
// description, installation instructions, usage information, contribution guidelines, and test instructions
// license
// Github username
// email address
const questions = [
  {
    name: 'title',
    message: 'What is the title of this project?'
  },
  {
    name: 'description',
    message: 'Please enter a project description'
  },
  {
    name: 'installationInstructions',
    message: 'What are the installation instructions?'
  },
  {
    name: 'usageInfo',
    message: 'Please enter usage information'
  },
  {
    name: 'contributionGuidelines',
    message: 'What are this project\'s contribution guidelines?'
  },
  {
    name: 'testInstructions',
    message: 'What are these project\'s test instructions?'
  },
  {
    name: 'license',
    message: 'What license will this project use?',
    type: 'list',
    choices: [
      'Option A',
      'Option B'
    ]
  },
  {
    name: 'username',
    message: 'What is your github username?'
  },
  {
    name: 'email',
    message: 'What is your email address?'
  }
];

// Execution // 

init();

// Functions //

function convertAnswersToReadmeSyntax(answers){

  const pageElements = [];

  // Create title
  const title = `# ${answers.title}\n`;
  pageElements.push(title);

  // Create description
  const description = `${answers.description}\n`;
  pageElements.push(description);

  // Create installation instructions
  const installationInstructions = (
    `## Installation Instructions\n\n${answers.installationInstructions}`
  )
  pageElements.push(installationInstructions);

  // Usage Info
  const usageInfo = `## Usage Information\n\n${answers.usageInfo}`
  pageElements.push(usageInfo);

  // Contribution Guidelines
  const contributionGuidelines = `## Contribution Guidelines\n\n${answers.contributionGuidelines}`;
  pageElements.push(contributionGuidelines);

  // Test Instructions
  const testInstructions = `## Test Instructions\n\n${answers.testInstructions}`;
  pageElements.push(testInstructions);
  

  return pageElements;
}


function writeToFile(data) {
  fs.stat(outputPath, (error, stats) => {
    // Create directory if not present
    if(error) {
      console.log(error);
      fs.mkdirSync(outputPath);
    }

    // Create/Overwrite file with content from answers
    fs.writeFile(fileNameAndPath, data, function(error) {
        console.log(error);
    });
  });
}

function init() {
  inquirer.prompt(
    questions
  )
  .then(answers => {

    pageElements = convertAnswersToReadmeSyntax(answers);

    writeToFile(pageElements.join('\n'));
  })
}