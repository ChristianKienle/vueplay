const { raw } = require("./../logger")

const usage = `Usage: vueplay [options]

Options:

  --editor        specify editor used to open the playground (default: code)
  --no-open       do not open the playground (default: false)
  --dest          playgrounds output directory (default: temporary directory)
  --template-dir  specify a custom template for playgrounds (default: template
                  directory that is shipped as part of vueplay)
  --name          name format of the playground to be created in "dest"
                  (default: \${randomId}). You can use the following placeholder:
                  \${randomId}  will be replaced by a short random id
  --help          output usage information
`

const printHelp = () => raw(usage)

module.exports = { printHelp }
