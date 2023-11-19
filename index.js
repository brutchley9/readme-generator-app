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
      type: 'input',
      name: 'apptitle',
      message: 'What is the title of your application?'
    },
    {
      type: 'input',
      name: 'readmepurpose',
      message: 'Describe in a sentence or two what your application is attempting to accomplish'
    },
    {
      type: 'input',
      name: 'readmeapp',
      message: 'Describe in a sentence or two the means by which you developed your application (programming languages/APIs/etc. used)'
    },
    {
      type: 'input',
      name: 'username',
      message: 'Please enter your GitHub username'
    },
    {
      type: 'input',
      name: 'githubrepo',
      message: 'Please enter the name of your GitHub repository containing your application code'
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

    const readmeFile = `# ${data.apptitle}
    

${data.readmepurpose} ${data.readmeapp}
    

---
    

Follow link https://github.com/${data.username}/${data.githubrepo} to access GitHub repository for this website (including code).
    

---
    

# Resources
    

<li>https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide</li>
    

<li>https://www.educative.io/answers/how-to-use-the-inquirer-node-package</li>
    

<li>https://www.codecademy.com/article/getting-user-input-in-node-js</li>`;
  
    fs.writeFile(filename, readmeFile, (err) =>
        err ? console.log(err) : console.log('README file generated!')
    );
});