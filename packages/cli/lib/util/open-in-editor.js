// @ts-check

const openInEditor = require("open-in-editor")
const { error, log } = require("../logger")

/**
 * @typedef {object} Options
 * @prop {string} editor
 * @prop {string} playgroundRoot
 */
/**
 * @param {Options} options
 * @returns {Promise<void>}
 */
const open = async ({ playgroundRoot, editor }) => {
  log(`👉  Opening playground in ${editor}.`)
  const opener = openInEditor.configure({
    cmd: editor,
    pattern: "-n {filename} "
  }, err => {
    error("Unable to open playground using editor.")
    error(`Underlying error: ${err}`)
  })
  try {
    await opener.open(playgroundRoot)
  } catch(openError) {
    error(openError)
    throw openError
  }
}

module.exports = open
