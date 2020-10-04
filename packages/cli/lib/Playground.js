// @ts-check

const { success, error } = require("./logger")
const { copyDir } = require("./util")
const isTextFile = require("./util/is-text-file")
const ejs = require("ejs")
const fs = require("fs")

/**
 * @typedef {() => void} OpenInEditor
 *
 * @typedef {object} Options
 * @prop {string} playgroundRoot
 * @prop {string} templateDirectory
 * @prop {import('./config/types').Config} config
 *
 */
module.exports = class Playground {
  /** @param {Options} options */
  constructor({ playgroundRoot, templateDirectory, config }) {
    this.playgroundRoot = playgroundRoot
    this.templateDirectory = templateDirectory
    this.config = config
  }

  async create() {

    const { templateDirectory, playgroundRoot } = this
    try {
      const files = await copyDir(templateDirectory, playgroundRoot)
      console.log(files)
      const textFiles = files.filter(file => isTextFile(file.path))
      for(const textFile of textFiles) {
        const transformed = await ejs.renderFile(textFile.path, this.config, {})
        fs.writeFileSync(textFile.path,transformed, "utf-8")
      }
    } catch(fsError) {
      error("Unable to create playground.")
      error("There was an error while copying the template to the destination directory:")
      error(`${fsError}`)
      throw fsError
    }

    success("🎉  Successfully created playground.")
  }
}
