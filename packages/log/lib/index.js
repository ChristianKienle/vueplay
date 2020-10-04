const chalk = require("chalk")

// eslint-disable-next-line no-console
const _log = console.log

const log = (msg, ...params) => _log(chalk.dim("vueplay") + " " + chalk.reset(msg), ...params)

// At the moment error and success do nothing special…
const error = log
const success = log

// Raw is logging without any fancyness
const raw = _log

module.exports = { success, log, error, raw }
