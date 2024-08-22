
const baseHTML = 'https://img.shields.io/badge/';

const badgeInfoMap = {
  'Option A': {
    formattedName: 'Option%20A',
    licenseSitePage: 'https://opensource.org/license/apache-2-0',
    versionNumber: '1.0',
    color: 'green'
  }
}

const markdownShell = '[![License](1)](2)';

function buildBadge(badgeName) {

  const badgeObject = badgeInfoMap[badgeName];

  // Create base hyperlink
  let badgeHyperlink = `${baseHTML}${badgeObject.formattedName}`

  // Set badge version number if available
  if(badgeObject.versionNumber){
    badgeHyperlink += `-${badgeObject.versionNumber}`
  };

  // Set badge coloring
  if(badgeObject.color){
    badgeHyperlink += `-${badgeObject.color}`;
  }
  else{
    badgeHyperlink += '-gray';
  }


  return `[![${badgeName}](${badgeHyperlink})](${badgeObject.licenseSitePage})`;
}

export { buildBadge }