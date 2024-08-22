
const baseHTML = 'https://img.shields.io/badge/';

// Badge Appearance base: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// Badge Link creation: https://shields.io/badges
const badgeInfoMap = {
  'None': {},
  'Apache License 2.0': {
    formattedName: 'Apache%20License',
    licenseSitePage: 'https://opensource.org/license/apache-2-0',
    versionNumber: '2.0',
    color: 'green'
  },
  'GNU General Public License v.3.0': {
    formattedName: 'License',
    licenseSitePage: 'https://www.gnu.org/licenses/gpl-3.0',
    versionNumber: 'GPLv3',
    color: 'blue'
  },
  'MIT License': {
    formattedName: 'License',
    licenseSitePage: 'https://opensource.org/license/MIT',
    versionNumber: 'MIT',
    color: 'yellow'
  },
  'BSD 2-Clause "Simplified" License': {
    formattedName: 'License',
    licenseSitePage: 'https://opensource.org/license/BSD-2-Clause',
    versionNumber: 'BSD%202--Clause',
    color: 'orange'
  },
  'BSD 3-Clause "New" or "Renewed" License': {},
  'Boost Software License 1.0': {},
  'Creative Commons Zero v1.0 Universal': {},
  'Eclipse Public License 2.0': {},
  'GNU Affero General Public License v3.0': {},
  'GNU Lesser General Public License v2.1': {},
  'Mozilla Public License 2.0': {},
  'The Unlicense': {},
  'Option A': {
    formattedName: 'Option%20A',
    licenseSitePage: 'https://opensource.org/license/apache-2-0',
    versionNumber: '1.0',
    color: 'green'
  }
}

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

export { buildBadge, badgeInfoMap }