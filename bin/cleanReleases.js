const fs = require('fs');
const path = require('path');

try {
const releases = fs.readFileSync(path.resolve('./out/make/squirrel.windows/x64/RELEASES'), 'utf-8');

const formatted = releases.replace(/(http:\/\/downloads\.coremanager\.app\/download\/\d*\.\d*\.\d*\/)/, '');

fs.writeFileSync(path.resolve('./out/make/squirrel.windows/x64/RELEASES'), formatted, 'utf-8');
} catch (e) {
  console.error('could not clean RELEASES (maybe mac?)', e);
}
