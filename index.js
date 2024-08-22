// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
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
    name: 'installation',
    message: 'What are the installation instructions?'
  },
  {
    name: 'usage_info',
    message: 'Please enter usage information'
  },
  {
    name: 'contribution_guidelines',
    message: 'What are this project\'s contribution guidelines?'
  },
  {
    name: 'test_instructions',
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
