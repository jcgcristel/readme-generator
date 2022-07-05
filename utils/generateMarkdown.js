// An array of license objects which contains the license name, license badge, and license url
const licenseList = [
  {
    name: 'GNU AGPLv3',
    badge: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    link: 'https://www.gnu.org/licenses/agpl-3.0'
  },
  {
    name: 'GNU GPLv3',
    badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    link: ''
  },
  {
    name: 'GNU LGPLv3',
    badge: 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
    link: 'https://www.gnu.org/licenses/lgpl-3.0'
  },
  {
    name: 'Mozilla Public License 2.0',
    badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
    link: 'https://opensource.org/licenses/MPL-2.0'
  },
  {
    name: 'Apache License 2.0',
    badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    link: 'https://opensource.org/licenses/Apache-2.0'
  },
  {
    name: 'MIT License',
    badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    link: 'https://opensource.org/licenses/MIT'
  },
  {
      name: 'Boost Software License 1.0',
      badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
      link: 'https://www.boost.org/LICENSE_1_0.txt'
  },
  {
      name: 'The Unlicense',
      badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
      link: 'http://unlicense.org/'
  },
  {
    name: '[OTHER LICENSE]'
  }
]

// Returns license object which will allow to call the appropriate license property where needed
// Example: getLicense('MIT License').link will return appropriate license url link to MIT License
const getLicense = function(licenseName) {
    return licenseList.find(licenseObj => licenseObj.name == licenseName);
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == '') { return ''};
  return `![${license.name}](${license.badge})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Returns blank if license is blank
  if (license.name == '') { return ''}
  return `[${renderLicenseBadge(license)}](${license.link})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, username,) {
  console.log(license.name);
   // Returns blank if license is blank
   if (license.name == '') { return ''}
   // If license is one of the default licenses
   else if (licenseList.some(licenseEl => licenseEl.name == license.name)) {
    license.link = getLicense(license.name).link;
   };
  
  let year = new Date().getFullYear();

  return `
  ## License
  Copyright ${year} ${username}
  
  Licensed under the ${license.name}, (the "License"), you may not use this file except 
  in compliance under the terms stated in this License. 
  
  You may obtain a copy of the License at:
    
    ${license.link}

  Unless required by applicable law or agreed to in writing, software
  distributed under this License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

  See the License for specific language governing permissions and
  limitations under the License.
  `;
}

function renderTableOfContents(license) {
  let licenseTitle;

  // Determines whether or not a License section should be added
  // Blank license names will not generate a License section
  (!license.name) ? licenseTitle = `` : licenseTitle = `
  [License](#license)`;

  return `## Table of Contents
  [Installation](#installation)
  [Usage](#usage)${licenseTitle}
  [Contributing](#contributing)
  [Question](#questions)`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // variable to hold license object which will store the following
  // name: for license name
  // badge: for link to badge icon
  // link: for the url to the license copy
  let license;

  // Determines if license is user generated via choice of [OTHER LICENSE]
  if (data.license == '[OTHER LICENSE]') {  
    license = {
      name: data.licenseName,
      badge: data.licenseBadge,
      link: data.licenseLink
    }
  }
  // Else, license was chosen amongst the default options
  else {
    license = { 
      name: data.license,
      badge: getLicense(data.license).badge,
      link: getLicense(data.license).link
    }
  }

  return `# ${data.title} ${renderLicenseLink(license)}

  ## Description
  ${data.description}

  ${renderTableOfContents(license.name)}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ${renderLicenseSection(license, data.github)}
  ## Contributing
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  [${data.github}](https://github.com/${data.github})
  For additional questions, you can email me at [${data.email}](mailto:${data.email})
`;
}

export {licenseList, generateMarkdown};
