// @ts-check
const { resolveName, tempDir, createShortId, templateDir } = require("./../util")
const getCLIConfig = require("./provider/cli-args")
const getRCConfig = require("./provider/config-file")
/**
 * @typedef {import('./types').Config} Config
 */

/** @return {Config} */
const defaultConfig = () => ({
  editor: "code",
  vueVersion: "2",
  open: true,
  help: false,
  printConfig: false,
  dest: tempDir,
  name: "${randomId}",
  templateDir: templateDir
})

/**
 * @param {Config} config
 * @returns {Config}
 */
const resolveConfig = (config) => {
  const resolvedName = resolveName({
    nameTemplate: config.name,
    variables: {
      randomId: createShortId()
    }
  })
  const resolvedOptions = {
    ...config,
    name: resolvedName
  }
  return resolvedOptions
}

const getConfig = async (...args) => {
  const config = defaultConfig()
  const rc = getRCConfig()
  const cli = await getCLIConfig(defaultConfig(), ...args)
  const merged = { ...config, ...rc, ...cli }
  return merged
}

module.exports = { getConfig, resolveConfig, defaultConfig }
