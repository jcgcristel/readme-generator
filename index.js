// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs, { writeFile } from 'fs';
import {licenseList, generateMarkdown} from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
      name: 'title',
      type: 'input',
      message: 'Title:'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Description:'
    },
    {
      name: 'installation',
      type: 'input',
      message: 'Installation instructions:'
    },
    {
      name: 'license',
      type: 'list',
      message: 'License Type:',
      choices: licenseList.map(license => license.name)
    },
    {
      name: 'licenseName',
      type: 'input',
      message: 'License name:'  ,
      when: (response) => {
        if (response.license == '[OTHER LICENSE]') {
          return true;
        }
      }
    },
    {
      name: 'licenseBadge',
      type: 'input',
      message: 'License badge link:',
      when: (response) => {
        if (response.license == '[OTHER LICENSE]') {
          return true;
        }
      }
    },
    {
      name: 'licenseLink',
      type: 'input',
      message: 'License url link:',
      when: (response) => {
        if (response.license == '[OTHER LICENSE]') {
          return true;
        }
      }
    },
    {
      name: 'usage',
      type: 'input',
      message: 'Usage information:'    
    },
    {
      name: 'contribution',
      type: 'input',
      message: 'Contributing guidelines:'    
    },
    {
      name: 'test',
      type: 'input',
      message: 'Test instructions:'
    },
    {
      name: 'github',
      type: 'input',
      message: 'GitHub Username:'
    },
    {
      name: 'email',
      type: 'input',
      message: 'Email Address:'
    }

];

// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    // Writes generated markdown into a README.md
    fs.writeFile('./README.md', data, e => {
      if (e) {
        reject(e);
        return;
      };

      resolve({
        ok: true,
        message: 'File Created'
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log(`=========================================  
  READ ME GENERATOR: Follow the prompts
=========================================`)

  return inquirer.prompt(questions);
}

// Function call to initialize app
init()  
  .then(answers => { return generateMarkdown(answers)})
  .then(readMeData => { return writeToFile(readMeData)})
  .then(writeToFileResponse => {console.log(writeToFileResponse)});