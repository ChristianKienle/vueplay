// @ts-check
const { resolveName, tempDir, createShortId, templateDir } = require("./../util")
const getCLIConfig = require("./provider/cli-args")
const getRCConfig = require("./provider/config-file")

/**
 * @typedef {object} Config
 * @prop {boolean} open
 * @prop {boolean} help
 * @prop {boolean} printConfig
 * @prop {string} editor
 * @prop {string} dest
 * @prop {string} name
 * @prop {string} templateDir
 */

/** @type {() => Config} */
const defaultConfig = () => ({
  editor: "code",
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

const getConfig = (...args) => {
  const config = defaultConfig()
  const rc = getRCConfig()
  const cli = getCLIConfig(...args)
  const merged = { ...config, ...rc, ...cli }
  return merged
}

module.exports = { getConfig, resolveConfig, defaultConfig }
