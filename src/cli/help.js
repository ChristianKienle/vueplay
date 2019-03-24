const { raw } = require("./../logger")
const chalk = require("chalk")

const usage = `Usage: ${chalk.bold("vueplay")} [options]

Options:

  --print-config  print resolved configuration, then exit
  --editor        specify editor used to open the playground (default: code)
  --no-open       do not open the playground (default: false)
  --dest          playgrounds output directory (default: temporary directory)
  --template-dir  specify a custom template for playgrounds (default: template
                  directory that is shipped as part of vueplay)
  --name          name format of the playground to be created in "dest"
                  (default: \${randomId}). You can use the following placeholder:
                  \${randomId}  will be replaced by a short random id
  --help          output usage information

  ${chalk.dim("Options can also be specified by having a file called .vueplayrc.js in your")}
  ${chalk.dim("home directory. Options specified via the CLI override the optiones that are")}
  ${chalk.dim("also specified in the .vueplayrc.js config file.")}

                   ${chalk.blue.bold("🦄  made by the Unicorn Syndicate 🦄")}
`

const printHelp = () => raw(usage)

module.exports = { printHelp }
