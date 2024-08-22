// Variables
import inquirer from 'inquirer';
import fs from 'fs';
import { buildBadge, badgeInfoMap } from './scripts/badgeHandler.mjs';

const outputPath = './output';
const fileNameAndPath = `${outputPath}/README.md`;
const badges = Object.keys(badgeInfoMap);

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
    choices: badges
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
  const title = `# ${answers.title}\n\n`;
  pageElements.push(title);

  // Create license badge
  const badge = buildBadge(answers.license);
  pageElements.push(`${badge}\n\n`);

  // Create description
  const description = `## Description\n\n${answers.description}`;
  pageElements.push(description);

  // Create installation instructions
  const installationInstructions = (
    `## Installation \n\n${answers.installationInstructions}`
  )
  pageElements.push(installationInstructions);

  // Usage Info
  const usageInfo = `## Usage\n\n${answers.usageInfo}`
  pageElements.push(usageInfo);

  // Contribution Guidelines
  const contributionGuidelines = `## Contributing\n\n${answers.contributionGuidelines}`;
  pageElements.push(contributionGuidelines);

  // Test Instructions
  const testInstructions = `## Tests\n\n${answers.testInstructions}`;
  pageElements.push(testInstructions);

  // License
  const license = `## License\n\nThis project uses the ${answers.license} license`;
  pageElements.push(license);

  // 

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

    const pageElements = convertAnswersToReadmeSyntax(answers);

    writeToFile(pageElements.join('\n'));
  })
}