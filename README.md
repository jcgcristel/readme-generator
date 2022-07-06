# README Generator 

## Description
README.md generator using the npm Inquirer.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Question](#questions)

## Installation
Ensure inquirer is installed using node.js via:

    npm install inquirer

## Usage
A way to quickly generate README files via prompts with options to add licenses along with their appropriate badge and links.

## Test
Ensure you are in the correct directory where **index.js**, and in the console write:

    node index.js

If you see the following prompt, you can proceed with the README generation:
    
    =========================================  
     READ ME GENERATOR: Follow the prompts
    =========================================
    
*If no prompt appears, double check you are in the correct directory and refer back to the Installation Instructions that you have the required modules installed.*

Once you have proceeded with the prompts, you will then be prompted to name your README file:

    ========================================= 
    Almost done! Name your README file 
    (Do not include a file extension):
    =========================================
    File name: _

On success you will see the message:

    File Created

This file can be found in the **/generated** folder. It will be named as you have designated appended with **_README.md**. Go ahead and rename this file to add to your portfolio.

### Note on License Prompt
Additional prompts will be given when selecting [OTHER LICENSE].

- License Name: name of license
- License Badge: link to license icon/badge
- License Link: link to license copy

*Leaving these options blank will ensure no licensing section will be added to the final README.*

### Example
![Site Preview](assets\images\app-prev.png)

## Questions
[jcgcristel's GitHub](https://github.com/jcgcristel)

For additional questions, you can email me at [jcg.cristel@gmail.com](mailto:jcg.cristel@gmail.com.).
