const chalk = require('chalk');
const _log = console.log;

const log = msg => _log(chalk.white.bgMagenta.bold(" vueplay ") + " " + msg);
const error = msg => _log(chalk.white.bgRed.bold(" vueplay ") + " " + msg);
const success = msg => _log(chalk.white.bgGreen.bold(" vueplay ") + " " + msg);

module.exports = { success, log, error };
