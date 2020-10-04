const { promises: fs } = require("fs")

const ncp = require("ncp").ncp
ncp.limit = 1

/** @param {string} path */
const getFiles = async (path) => {
  const entries = await fs.readdir(path, { withFileTypes: true })
  let files = entries
    .filter(file => !file.isDirectory())
    .map(file => ({ name: file.name, path: path + file.name }))

  const folders = entries.filter(folder => folder.isDirectory())
  for (const folder of folders) {
    const moreFiles = await getFiles(`${path}${folder.name}/`)
    files = files.concat(moreFiles)
  }
  return files
}

/**
 * @param {string} source
 * @param {string} destination
 * @returns {Promise<{path: string, name: string}[]>}
 */
const copyDir = (source, destination) => {
  return new Promise((resolve, reject) => {
    ncp(source, destination, err => {
      if(err) {
        reject(err)
        return
      }
      resolve()
    })
  })
}

/**
 * @param {string} source
 * @param {string} destination
 * @returns {Promise<{path: string, name: string}[]>}
 */
const copyDirAndGetFiles = async (source, destination) => {
  await copyDir(source, destination)
  return getFiles(`${destination}/`)
}

module.exports = copyDirAndGetFiles
