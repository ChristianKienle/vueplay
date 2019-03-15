const createPlayground = require("./create-playground")
const { error } = require("./logger");

(async () => {
  createPlayground()
})().catch(err => error(err))
