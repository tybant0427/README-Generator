// Create a function that returns a license badge 
function renderLicenseBadge(data) {
  if (data === "Apache-2.0") {
    return ("https://img.shields.io/npm/l/s?style=for-the-badge")
  } else if (data === "ISC") {
    return ("https://img.shields.io/npm/l/d?style=for-the-badge")
  } else if (data === "MIT") {
    return ("https://img.shields.io/npm/l/c?style=for-the-badge")
  } else if (data === "Gpl-3.0") {
    return ("https://img.shields.io/npm/l/v?style=for-the-badge")
  }}

// Create a function that returns the license link
function renderLicenseLink(data) {
  if (data) {
    let chLink = `https://choosealicense.com/licenses/${data}/`
    return chLink;
  } return;
}


// Create a function to generate markdown for README
function generateMarkdown(data) {
  let licLink = data.license;
    console.log(licLink)
  let renLink = renderLicenseLink(licLink.toLowerCase());
  let renBadg = renderLicenseBadge(licLink);
    return (`# ${data.title}
  ![${licLink}](${renBadg})

  ## Description
  ${data.description}

  ## Table of Contents
  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  
  ## License 
  [${licLink}](${renLink})

  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## Contributing 
  ${data.contributors}
    
  You can contact me here:  ${data.email}

  or here:  https://github.com/tybant0427

  ## Tests
  ${data.test}

`);
}

module.exports = generateMarkdown;