// @ts-check
const createCli = require("../../cli/cli")

/**
 * @param {import('./../types').Config} defaults
 * @param  {...any} args
 * @return {Promise<import('./../types').Config>}
 */
module.exports = (defaults, ...args) => {
  return createCli(defaults).parse(args)
}
