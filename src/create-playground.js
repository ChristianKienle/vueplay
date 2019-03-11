const os = require("os");
const Path = require("path");
const fs = require("fs");
const createShortId = require("./create-short-id");
const openInEditor = require("open-in-editor");
const ncp = require('ncp').ncp;
ncp.limit = 1;
const execa = require('execa');
const { success, error, log } = require("./logger");
const editor = openInEditor.configure({
  cmd: "code",
  pattern: "-n {filename} "
}, err => {
  error('Unable to open playground using editor.');
  error(`Underlying error: ${err}`);
});

const templatePath = Path.resolve(__dirname, "template");

module.exports = async () => {
  const temp = os.tmpdir();
  const dir = createShortId();
  log(`Creating playground at ${temp}…`);
  const playgroundRoot = Path.resolve(temp, dir);
  fs.mkdirSync(playgroundRoot);
  ncp(templatePath, playgroundRoot, async (err) => {
    if (err) {
      error('Unable to create playground.');
      error('There was an error while copying the template to the destination directory:');
      error(`${err}`);
      return;
    }
    success(`Playground at ${temp} created.  🤩`);
    log(`Opening playground using Visual Studio Code…`);
    await editor.open(playgroundRoot);
    log(`Starting the Vue magic…`);
    execa('vue', ['serve'], { cwd: playgroundRoot }).stdout.pipe(process.stdout);;
  });
};