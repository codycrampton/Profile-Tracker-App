const fs = require('fs');
const path = require('path');

const structure = {
  'package.json': '',
  'next.config.js': '',
  'tailwind.config.js': '',
  'postcss.config.js': '',
  'db.js': '',
  lib: {
    'scraper.js': '',
    'babepedia.js': '',
  },
  pages: {
    '_app.js': '',
    'index.js': '',
    api: {
      'profiles.js': '',
      'profiles/[id].js': '',
      'scrape/[source].js': '',
    },
  },
  components: {
    'ProfileGallery.jsx': '',
    'ProfileCard.jsx': '',
    'ProfileDetail.jsx': '',
  },
};

function createStructure(basePath, obj) {
  for (const [name, content] of Object.entries(obj)) {
    const fullPath = path.join(basePath, name);
    if (typeof content === 'string') {
      fs.writeFileSync(fullPath, content); // Create file with the provided content
    } else {
      fs.mkdirSync(fullPath, { recursive: true }); // Create folder
      createStructure(fullPath, content); // Recurse into folder
    }
  }
}

const root = path.resolve('profile-tracker-app');
fs.mkdirSync(root, { recursive: true });
createStructure(root, structure);

console.log('Folder structure has been set up!');