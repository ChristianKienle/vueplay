const ncp = require("ncp").ncp
ncp.limit = 1

/**
 * @param {string} source
 * @param {string} destination
 * @returns {Promise<void>}
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

module.exports = copyDir
