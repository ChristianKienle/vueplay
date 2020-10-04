// @ts-check
const { log } = require("@vueplay/log")
const Service = require("@vue/cli-service")
const toPlugin = id => ({ id, apply: require(id) })
const babelPlugin = toPlugin("@vue/cli-plugin-babel")
const globalConfigPlugin = require("./global-config-plugin-light")

/** @param {string} playgroundRoot */
module.exports = (playgroundRoot) => {
  log("🚀  Starting the Vue magic.")
  // @ts-ignore
  const service = new Service(playgroundRoot, {
    projectOptions: {
      compiler: true,
      lintOnSave: "default"
    },
    plugins: [
      babelPlugin,
      globalConfigPlugin(playgroundRoot)
    ]
  })
  service.run("serve")
}
