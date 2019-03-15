const { defaultConfig, cliConfig } = require("./../config")

describe("cliConfig", () => {
  it("returns defaults when no args given", () => {
    const dc = defaultConfig()
    expect(cliConfig()).toEqual(dc)
    expect(cliConfig(...[])).toEqual(dc)
  })

  it("correct open editor options", () => {
    expect(cliConfig("--no-open").open).toBe(false)
    expect(cliConfig("--open").open).toBe(true)
    expect(cliConfig("--open").editor).toBe("code")
    expect(cliConfig("--no-open").editor).toBe("code")
  })

})
