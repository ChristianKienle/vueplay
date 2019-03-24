const { resolveConfig, getConfig } = require("./config")

module.exports = () => {
  const args = process.argv.slice(2)
  const config = getConfig(...args)
  return resolveConfig(config)
}
