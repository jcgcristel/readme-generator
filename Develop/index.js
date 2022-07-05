
// TODO: Include packages needed for this application
import inquirer from "inquirer";

// License informations
const licenses = [
    {
      license: 'GNU AGPLv3',
      badge: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
      link: 'https://www.gnu.org/licenses/agpl-3.0'
    },
    {
      license: 'GNU GPLv3',
      badge: '',
      link: ''
    },
    {
      license: 'GNU LGPLv3',
      badge: '',
      link: ''
    },
    {
      license: 'Mozilla Public License 2.0',
      badge: '',
      link: ''
    },
    {
      license: 'Apache License 2.0',
      badge: '',
      link: ''
    },
    {
      license: 'MIT License',
      badge: '2',
      link: ''
    },
    {
        license: 'Boost Software License 1.0',
        badge: '',
        link: ''
    },
    {
        license: 'The Unlicense',
        badge: '',
        link: ''
    }
  ]

// Array of license names
const licenseNames = function() {
    let licenseNamesArr = [];
    licenses.forEach(license => licenseNamesArr.push(license.license));
    return licenseNamesArr;
}

// Returns license object
const licenseInfo = function(licenseName) {
    let licenseObj = {};
    licenses.forEach(license => {
        if (license.license == licenseName) {
            licenseObj = license;
            return;
        }
    });    
    return licenseObj;
}

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
        name: 'license',
        type: 'list',
        message: 'License Type:',
        choices: licenseNames()
    },
    {
        name: 'github',
        type: 'input',
        message: 'GitHub Profile:'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Email Address:'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    // return inquirer.prompt(questions);
    // licenses.forEach(license => console.log(license.badge))
    console.log(licenseInfo('MIT License').badge);
}

// Function call to initialize app
init();
