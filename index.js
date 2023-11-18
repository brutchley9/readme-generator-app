console.log("Thank you for using the README Generator App. One moment please...");


const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'readmefilename',
      message: 'What would you like to name your README file? (Please choose a name other than "README" as your file name)'
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekenesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.readmefilename}.md`;

    const readmeFile = `# Generated README file!
    
For this week's challenge, my task is to utilize Node.js to create a README file generator, a back-end web application that utilizes user inputs through the command line to automatically create a README file. The purpose of this is to allow users to quickly render a file that describes their own application in order to save valuable time trying to create a README file from scratch, streamlining the process of web development even further.
    
---
    
Follow link https://github.com/brutchley9/readme-generator to access GitHub repository for this website (including code).
    
---
    
# Resources
    
<li>https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide</li>
    
<li>https://www.educative.io/answers/how-to-use-the-inquirer-node-package</li>
    
<li>https://www.codecademy.com/article/getting-user-input-in-node-js</li>`;
  
    fs.writeFile(filename, readmeFile, (err) =>
        err ? console.log(err) : console.log('README file generated!')
    );
});
















// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();