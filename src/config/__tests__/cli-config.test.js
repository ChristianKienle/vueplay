const cliConfig = require("./../provider/cli-args")

describe("cliConfig", () => {
  it("returns defaults when no args given", () => {
    expect(cliConfig()).toEqual({})
    expect(cliConfig(...[])).toEqual({})
  })

  it("correct open editor options", () => {
    expect(cliConfig("--no-open").open).toBe(false)
    expect(cliConfig("--open").open).toBe(true)
    expect(cliConfig("--editor", "code").editor).toBe("code")
    expect(cliConfig("--editor", "hrhr").editor).toBe("hrhr")
  })

})
