const mri = require("mri")

module.exports = (...args) => {
  const options = mri(args, {
    alias: {
      templateDir: "template-dir",
      printConfig: "print-config"
    },
    boolean: ["open", "help"],
    string: ["editor", "name", "dest", "templateDir"]
  })
  // eslint-disable-next-line no-unused-vars
  const { _, ...cleanOptions } = options
  return cleanOptions
}
