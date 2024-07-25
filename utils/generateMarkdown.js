// 5 License badges I'm selecting for README Generator

// APACHE 2.0
// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
// (https://opensource.org/licenses/Apache-2.0)

// Eclipse 1.0
// [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]
// (https://opensource.org/licenses/EPL-1.0)

// IBM 1.0
// [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]
// (https://opensource.org/licenses/IPL-1.0)

// MIT
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
// (https://opensource.org/licenses/MIT)

// WTFPL  
// [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]
// (http://www.wtfpl.net/about/)



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Eclipse 1.0") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (license === "IBM 1.0") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "WTFPL") {
    return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if (license === "Apache 2.0") {
  //   return "(https://opensource.org/licenses/Apache-2.0)";
  // } else if (license === "Eclipse 1.0") {
  //   return "(https://opensource.org/licenses/EPL-1.0)";
  // } else if (license === "IBM 1.0") {
  //   return "(https://opensource.org/licenses/IPL-1.0)";
  // } else if (license === "MIT") {
  //   return "(https://opensource.org/licenses/MIT)";
  // } else if (license === "WTFPL") {
  //   return "(http://www.wtfpl.net/about/)";
  // } else if (license === "None") {
  //   return "";
  // }

  if (license === 'None'){
    return ''
  }
  return ' [License](#license)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
   
    return `## License
    
    This application is covered under the ${license} license`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  [Installation](#Installation)<br>
  [Usage](#Usage)<br>
  [Contributing](#Contributing)<br>
 ${renderLicenseLink(data.license)}<br>
  [Tests](#Tests)<br>
  [Questions](#Questions)<br>

  ## Installation

  To install the necessary dependencies for this application, please run the following command: 

  ${data.command}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ${renderLicenseSection(data.license)}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions regarding this application or repo, please open an issue or email me at ${data.userEmail}<br>
  You can also find more of my work by visiting http://github.com/${data.userName}. 
`;
}

module.exports = generateMarkdown;
