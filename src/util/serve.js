const execa = require("execa")
const { log } = require("./../logger")

/**
 * @param {string} playgroundRoot
 * @returns {Promise<never>}
 */
const serve = (playgroundRoot) => {
  log("🚀  Starting the Vue magic.")
  return execa("vue", ["serve"], { cwd: playgroundRoot }).stdout.pipe(process.stdout)
}

module.exports = serve
