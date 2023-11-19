console.log("Thank you for using the README Generator App. One moment please...");


const inquirer = require('inquirer');
const fs = require('fs');

function renderLicenseBadge(license) {
  let licenseBadge = "";
  if(addlicenses === 'No License') {
    licenseBadge = 'No License Selected'
  } else if (license === 'Apache License 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GNU General Public License v3.0') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'MIT License') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Eclipse Public License 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else {
    licenseBadge = ""
  }
  return licenseBadge;
}












inquirer
  .prompt([
    {
      type: 'input',
      name: 'readmefilename',
      message: 'What would you like to name your README file? (Please choose a name other than "README" as your file name):'
    },
    {
      type: 'input',
      name: 'apptitle',
      message: 'What is the title of your application?'
    },
    {
      type: 'input',
      name: 'readmepurpose',
      message: 'Describe in a sentence or two what your application is attempting to accomplish:'
    },
    {
      type: 'input',
      name: 'readmeapp',
      message: 'Describe in a sentence or two the means by which you developed your application (programming languages/APIs/etc. used):'
    },
    {
      type: 'input',
      name: 'username',
      message: 'Please enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the primary email address where you can be reached by your users:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide a step by step description of installation instructions for users. The more descriptive, the better!'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide any relevant usage information the user may encounter. What sort of problems/issues might they encounter?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide description of test instructions needed to ensure application quality:'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How might users go about contributing to this project? (push/pull instructions, etc.):'
    },
    {
      type: 'checkbox',
      message: 'Which Licenses would you like to add?',
      name: 'addlicenses',
      choices: ['No License', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Eclipse Public License 2.0'],
    },
  ])
  .then((data) => {
    const filename = `${data.readmefilename}.md`;

    const readmeFile = `# ${data.apptitle}


## Description


${data.readmepurpose} ${data.readmeapp}
    

---


# Table of Contents

1. [Installation](#installation)

2. [Usage](#usage)

3. [Licenses](#licenses)

4. [Contributing](#contributing)

5. [Tests](#tests)

6. [Questions?](#questions)


---


## Installation


How to install application:


${data.installation}


---


## Usage


${data.usage}


---


## Licenses


---


## Contributing


${data.contributing}


---


## Tests


${data.tests}


---


## Questions?


Need additional information? Contact Me: ${data.email}


Follow link https://github.com/${data.username} to check out my GitHub profile!
    

---`;
  
    fs.writeFile(filename, readmeFile, (err) =>
        err ? console.log(err) : console.log('README file generated! Right-click on your file and select "Open Preview"')
    );
});