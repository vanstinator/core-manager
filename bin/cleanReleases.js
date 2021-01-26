const fs = require('fs');
const path = require('path');

const releases = fs.readFileSync(path.resolve('./out/make/squirrel.windows/x64/RELEASES'), 'utf-8');

const formatted = releases.replace(/(http:\/\/downloads\.coremanager\.app\/download\/\d*\.\d*\.\d*\/)/, '');

fs.writeFileSync(path.resolve('./out/make/squirrel.windows/x64/RELEASES'), formatted, 'utf-8');
