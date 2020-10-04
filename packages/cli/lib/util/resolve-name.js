// @ts-check

/**
 * @typedef {object} Options
 * @prop {string} nameTemplate
 * @prop {Object.<string,string>} variables
 */

// Thanks vscode
const VARIABLE_REGEXP = /\$\{(.*?)\}/g

/**
 * @param {Options} options
 * @returns {string}
 */
const resolveName = ({ nameTemplate, variables }) => {
  const compiled = nameTemplate.replace(VARIABLE_REGEXP, (match, variableName) => {
    const value = variables[variableName]
    if(value == null || value === undefined) {
      // do not replace anything
      // we cannot fail because recursive resolving is not yet supported but required.
      return match
    }
    return value
  })
  return compiled
}

module.exports = resolveName
