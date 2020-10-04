// @ts-check
const { resolveConfig, getConfig } = require("./config")

module.exports = async () => {
  const args = process.argv.slice(2)
  const config = await getConfig(...args)
  return resolveConfig(config)
}
