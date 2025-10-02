// inject-env.js
const fs = require('fs');
const path = require('path');

const envVariables = {
  CLIENT_ID: process.env.CLIENT_ID,
  API_KEY: process.env.API_KEY,
  SCOPES: process.env.SCOPES,
  FOLDER_ID: process.env.FOLDER_ID,
};

const jsContent = `window.env = ${JSON.stringify(envVariables)};`;

// Write to multiple locations to ensure it's accessible
const outputPath = path.join(__dirname, 'env-config.js');
fs.writeFileSync(outputPath, jsContent);

// Also write to public directory if it exists
const publicPath = path.join(__dirname, 'public', 'env-config.js');
if (fs.existsSync(path.join(__dirname, 'public'))) {
  fs.writeFileSync(publicPath, jsContent);
}

console.log('env-config.js created successfully');