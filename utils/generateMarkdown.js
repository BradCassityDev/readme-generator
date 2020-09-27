// function to determine license information
function licenseInformation(licnese) {
  //choices: ['Apache','MIT','GPL', 'none'] 
  let badge, licenseInfo = "";

  if (license === "Apache") {
    badge = "badge";
    licenseInfo = "An Apache license";
  } else if (license === "MIT") {
    badge = "badge";
    licenseInfo = "An MIT license";
  } else if (license === "GPL") {
    badge = "badge";
    licenseInfo = "An GPL license";
  } else {
    badge = "badge";
    licenseInfo = "There is no license for this project.";
  }
  return { badge: badge, licenseInfo: licenseInfo}
}

// function to generate markdown for README
function generateMarkdown(data) {
  // Get license information based on selected license type
  const {badge, licenseInfo} = licenseInformation(data.license);

  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ${licenseInfo}


  ## Contributing


  ## Tests


  ## Questions


`;
}

module.exports = generateMarkdown;
