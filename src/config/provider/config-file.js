const fs = require("fs-extra")
const os = require("os")
const Path = require("path")

const VUEPLAYRC_FILENAME = ".vueplayrc.js"

const configFilePath = () => {
  const homedir = os.homedir()
  return Path.resolve(homedir, VUEPLAYRC_FILENAME)
}

const vueplayrcExists = () => {
  const path = configFilePath()
  if(fs.existsSync(path) == false) {
    return false
  }

  try {
    const stats = fs.lstatSync(path)
    return stats.isFile()
  } catch(error) {
    throw Error(`${VUEPLAYRC_FILENAME} exists but is not a file.`)
  }
}

const getConfig = () => {
  const path = configFilePath()
  if(vueplayrcExists() == false) {
    return {}
  }
  const config = require(path)
  return config || {}
}

module.exports = getConfig

// module.exports = { getConfig, configFilePath, vueplayrcExists }
