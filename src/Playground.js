const { success, error } = require("./logger")
const { copyDir } = require("./util")

/**
 * @typedef {() => void} OpenInEditor
 *
 * @typedef {object} Options
 * @prop {string} playgroundRoot
 * @prop {string} templateDirectory
 *
 */
module.exports = class Playground {
  /** @param {Options} options */
  constructor({ playgroundRoot, templateDirectory }) {
    this.playgroundRoot = playgroundRoot
    this.templateDirectory = templateDirectory
  }

  async create() {
    const { templateDirectory, playgroundRoot } = this
    try {
      await copyDir(templateDirectory, playgroundRoot)
    } catch(fsError) {
      error("Unable to create playground.")
      error("There was an error while copying the template to the destination directory:")
      error(`${fsError}`)
      throw fsError
    }

    success("🎉  Successfully created playground.")
  }
}
