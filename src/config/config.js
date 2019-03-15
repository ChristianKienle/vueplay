// @ts-check
const mri = require("mri")
const { resolveName, tempDir, createShortId, templateDir } = require("./../util")

/**
 * @typedef {object} Config
 * @prop {boolean} open
 * @prop {string} editor
 * @prop {string} dest
 * @prop {string} name
 * @prop {string} templateDir
 *
 * @typedef {Config & {help: boolean}} CLIConfig
 */

/** @type {() => Config} */
const defaultConfig = () => ({
  editor: "code",
  open: true,
  dest: tempDir,
  name: "${randomId}",
  templateDir: templateDir
})

/** @type {() => CLIConfig} */
const defaultCLIConfig = () => ({
  ...defaultConfig(),
  help: false
})

/**
 * @param {string[]} args
 * @returns {CLIConfig}
 */
const cliConfig = (...args) => {
  if(args.length === 0) {
    return defaultCLIConfig()
  }
  const options = mri(args, {
    default: { ...defaultConfig(), help: false },
    alias: {
      templateDir: "template-dir"
    },
    boolean: ["open", "help"],
    string: ["editor", "name", "dest", "templateDir"]
  })
  return options
}

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

module.exports = { resolveConfig, defaultConfig, cliConfig }
