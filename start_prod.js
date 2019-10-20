
const { execSync } = require('child_process');

const port = process.env.PORT || 3200;

//  "serve:build": "serve -l 3000 ./build"

execSync(`npm run serve -- -l ${ port} ./build`, (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`${stdout}`);
  console.log(`${stderr}`);
});