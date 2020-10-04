// // @ts-check
const { error } = require("@vueplay/log")
/**
 * @param {string} playgroundRoot
 * @param {import('../config/types').Config} config
 */
module.exports = (playgroundRoot, { vueVersion }) => {
  let serve = () => {
    error("Unable to serve because vue version is invalid")
  }
  if(vueVersion=== "2") {
    serve = require("@vueplay/vue2")
  }
  if(vueVersion === "3") {
    serve = require("@vueplay/vue3")

  }
  serve(playgroundRoot)
}
