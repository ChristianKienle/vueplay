// @ts-check
const printHelp = require("./help")

/**
 * @param {import('./../config/types').Config} defaults
 */
module.exports = (defaults) => {
  const cli = require("yargs")
    .option("templateDir", {
      alias: "template-dir",
      string: true,
      default: defaults.templateDir,
      description:
        "specify a custom template for playgrounds (default: template directory that is shipped as part of vueplay)",
    })
    .option("printConfig", {
      description: "print resolved configuration, then exits",
      boolean: true,
      alias: "print-config",
      default: defaults.printConfig,
    })
    .option("vue-version", {
      description: "major Vue version to use",
      choices: ["2", "3"],
      default: "2",
      string: true,
    })
    .option("open", {
      description: "Open the playground automatically",
      boolean: true,
      default: defaults.open,
    })
    .option("dest", {
      string: true,
      description: `playgrounds output directory. Defaults to a temporary + unique directory (eg. ${defaults.dest} `,
      default: defaults.dest,
    })
    .option("editor", {
      description: "specify editor used to open the playground",
      default: defaults.editor,
      string: true,
    })
    .option(
      "name",

      {
        default: defaults.name,
        description: `name format of the playground to be created in "dest"
      (default: \${randomId}). You can use the following placeholder:
      \${randomId}  will be replaced by a short random id`,
        string: true,
      }
    )
    .option("help", {
      description: "output usage information",
      boolean: true,
      default: defaults.help,
    })

  return {
    printHelp,
    cli,
    /**
     * @param {...any} argv
     */
    parse(argv) {
      cli.exitProcess(false)
      return new Promise((resolve, reject) => {
        cli.parse(argv, (error, result) => {
          if (error != null) {
            reject(error)
            return
          }
          resolve(result)
        })
      })
    },
  }
}
