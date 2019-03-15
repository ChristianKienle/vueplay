const { resolveConfig, cliConfig } = require("./config")

const getConfig = () => {
  const args = process.argv.slice(2)
  const config = cliConfig(...args)
  return resolveConfig(config)
}

module.exports = { getConfig }
