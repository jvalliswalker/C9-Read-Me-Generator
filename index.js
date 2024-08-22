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
  pageElements.push(
    `# ${answers.title}`
  );

  // Create license badge
  const badge = buildBadge(answers.license);
  if(badge != null){
    pageElements.push(badge);
  }

  // Create description
  pageElements.push(
    '## Description',
    answers.description
  );

  // Create installation instructions
  pageElements.push(
    '## Installation',
    answers.installationInstructions
  );

  // Usage Info
  pageElements.push(
    '## Usage',
    answers.usageInfo
  );

  // Contribution Guidelines
  pageElements.push(
    '## Contributing',
    answers.contributionGuidelines
  );

  // Test Instructions
  pageElements.push(
    '## Tests',
    answers.testInstructions
  );

  // License
  if(badge != null){
    pageElements.push(
      '## License\n\n',
      `This project is licensed under ${answers.license}\n\n`
    );
  }

  // Questions
  pageElements.push(
    '## Questions',
    `You can reach me for any questions about this project on github at:`,
    ` - Github: [${answers.username}](https://github.com/${answers.username})`,
    ` - Email: ${answers.email}`
  );
  
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

    writeToFile(pageElements.join('\n\n'));
  })
}