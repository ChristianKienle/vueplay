// @ts-check
const Path = require("path")

/**
 * @param {string} filename
 */
module.exports = (filename) => {
  const extension = Path.extname(filename)
  return [".vue", ".text", ".txt", ".json", ".json5", ".js", ".ts", ".md"].includes(extension)
}
