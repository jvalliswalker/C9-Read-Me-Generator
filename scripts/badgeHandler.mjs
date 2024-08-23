
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
  'BSD 3-Clause "New" or "Renewed" License': {
    formattedName: 'License',
    licenseSitePage: 'https://opensource.org/licenses/BSD-3-Clause',
    versionNumber: 'BSD%203--Clause',
    color: 'orange'
  },
  'Boost Software License 1.0': {
    formattedName: 'License',
    licenseSitePage: 'https://www.boost.org/LICENSE_1_0.txt',
    versionNumber: 'Boost%201.0',
    color: 'lightblue'
  },
  'Creative Commons Zero v1.0 Universal': {
    formattedName: 'License',
    licenseSitePage: 'https://creativecommons.org/publicdomain/zero/1.0/',
    versionNumber: 'CC0%201.0',
    color: 'lightgrey'
  },
  'Eclipse Public License 2.0': {
    formattedName: 'License',
    licenseSitePage: 'https://opensource.org/licenses/EPL-1.0',
    versionNumber: 'EPL%201.0',
    color: 'red'
  },
  'GNU Affero General Public License v3.0': {
    formattedName: 'License',
    licenseSitePage: 'https://www.gnu.org/licenses/agpl-3.0',
    versionNumber: 'AGPL%20v3',
    color: 'blue'
  },
  'GNU Lesser General Public License v2.1': {
    formattedName: 'License',
    licenseSitePage: 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html',
    versionNumber: 'AGPL%20v2.1',
    color: 'blue'
  },
  'Mozilla Public License 2.0': {
    formattedName: 'License',
    licenseSitePage: 'https://opensource.org/licenses/MPL-2.0',
    versionNumber: 'MPL%20v2.0',
    color: 'brightgreen'
  },
  'The Unlicense': {
    formattedName: 'License',
    licenseSitePage: 'http://unlicense.org/',
    versionNumber: 'Unlicense',
    color: 'blue'
  }
}

function buildBadge(badgeName) {

  if(badgeName == 'None'){
    return null;
  }
  else {
    const badgeObject = badgeInfoMap[badgeName];
  
    // Create base hyperlink
    let badgeHyperlink = `${baseHTML}${badgeObject.formattedName}-${badgeObject.versionNumber}-${badgeObject.color}`
  
    return `[![${badgeName}](${badgeHyperlink})](${badgeObject.licenseSitePage})`;
  }
}

export { buildBadge, badgeInfoMap }