const Path = require("path")
const fs = require("fs-extra")
const Playground = require("./Playground")
const { openInEditor, serve } = require("./util")
const { error, log } = require("./logger")
const { getConfig } = require("./config")
const { printHelp } = require("./cli")
const config = getConfig()

module.exports = async () => {
  const { dest, name, help } = config
  if(help) {
    printHelp()
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
    templateDirectory: config.templateDir
  })

  try {
    await playground.create()
    if(config.open) {
      await openInEditor({ editor: config.editor, playgroundRoot })
    }
    await serve(playgroundRoot)
  } catch(err) {
    error(err)
    throw err
  }
}
