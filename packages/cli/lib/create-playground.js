// @ts-check
const Path = require("path")
const fs = require("fs-extra")
const Playground = require("./Playground")
const { openInEditor, serve } = require("./util")
const { error, log } = require("./logger")
const getConfig = require("./config")
const createCli = require("./cli/cli")

module.exports = async () => {
  const config = await getConfig()
  const { printConfig, dest, name, help } = config
  if(printConfig) {
    log("⚙️  Configuration:")
    log(JSON.stringify(config))
    return
  }
  if(help) {
    createCli(config).printHelp()
    return
  }
  log(`✨  Creating playground in ${dest}.`)
  const playgroundRoot = Path.resolve(dest, name)

  try {
    await fs.mkdir(playgroundRoot)
  } catch(fsError) {
    error("Unable to create playground.")
    error(`Could not create directory for playground at ${playgroundRoot}`)
    error("because a file system error occured:")
    error(fsError)
    return
  }

  const playground = new Playground({
    playgroundRoot,
    templateDirectory: config.templateDir,
    config,
  })

  try {
    await playground.create()
    if(config.open) {
      await openInEditor({ editor: config.editor, playgroundRoot })
    }
    await serve(playgroundRoot, config)
  } catch(err) {
    error(err)
    throw err
  }
}
