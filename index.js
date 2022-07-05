// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs, { writeFile } from 'fs';
import {licenseList, generateMarkdown} from "./utils/generateMarkdown.js";

// // Array of license names
// const licenseNames = function() {
//     return licenseList.map(licenseObj => licenseObj.name)  
// }

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
function writeToFile(fileName, data) {
  // promptFileName = {
  //   name: fileName,
  //   type: 'input',
  //   message: 'Name of your README file:'
  // };

  // return inquirer.prompt(promptFileName)
  //   .then(answers => console.log(answers))
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, e => {
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
  return inquirer.prompt(questions)
    .then(answers => { return generateMarkdown(answers)})
    .then(readMeData => { return writeToFile('./README.md', readMeData) });
}

// Function call to initialize app
init();