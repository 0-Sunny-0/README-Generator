// 5 License badges I'm selecting for README Generator

// MIT
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
// (https://opensource.org/licenses/MIT)

// APACHE 2.0
// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
// (https://opensource.org/licenses/Apache-2.0)

// Eclipse 1.0
// [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]
// (https://opensource.org/licenses/EPL-1.0)

// IBM 1.0
// [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]
// (https://opensource.org/licenses/IPL-1.0)


// WTFPL  
// [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]
// (http://www.wtfpl.net/about/)



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;
