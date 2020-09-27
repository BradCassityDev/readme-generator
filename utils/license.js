// function to determine license information
function licenseInformation(license) {
    // initiating variables
    let badge, licenseInfo = "";
  
    // set variables based on selected license
    if (license === "Apache License 2.0") {
        badge = "badge";
        licenseInfo = "";
    } else if (license === "GNU General Public License v3.0") {
        badge = "badge";
        licenseInfo = "";
    } else if (license === "BSD 2-Clause 'Simplified' License") {
        badge = "badge";
        licenseInfo = "";
    } else if (license === "BSD 3-Clause 'New' or 'Revised' License") {
        badge = "badge";
        licenseInfo = "";
    } else if (license === "Boost Software License 1.0") {
        badge = "badge";
        licenseInfo = "";
    } else if (license === "Creative Commons Zero v1.0 Universal") {
        badge = "badge";
        licenseInfo = "";
    } else if (license === "Eclipse Public License 2.0") {
        badge = "badge";
        licenseInfo = "";
    } else if (license === "GNU Affero General Public License v3.0") {
        badge = "badge";
        licenseInfo = "";
    } else if (license === "GNU General Public License v2.0") {
        badge = "badge";
        licenseInfo = "";
    } else if (license === "GNU Lesser General Public License v2.1") {
        badge = "badge";
        licenseInfo = "";
    } else if (license === "Mozilla Public License 2.0") {
        badge = "badge";
        licenseInfo = "";
    } else {
        badge = "badge";
        licenseInfo = "There is no license for this project.";
    }
    
    // return license badge and information
    return { badge: badge, licenseInfo: licenseInfo}
  }
  
module.exports = licenseInformation;