console.log("Thank you for using the README Generator App. One moment please...");


const inquirer = require('inquirer');
const fs = require('fs');














inquirer
  .prompt([
    {
      type: 'input',
      name: 'readmefilename',
      message: 'What would you like to name your README file?'
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