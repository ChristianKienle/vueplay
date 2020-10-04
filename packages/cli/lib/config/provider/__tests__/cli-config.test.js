// @ts-check
const cliConfig = require("../cli-args")

describe("cliConfig", () => {
  test("returns defaults when no args given", async () => {
    const sut = await cliConfig(
      {
        vueVersion: "2",
        open: true,
        help: false,
        printConfig: true,
        editor: "vscode",
        dest: "bla",
        name: "myapp",
        templateDir: "/tmp",
      },
      []
    )
    expect(sut).toMatchObject({
      vueVersion: "2",
      open: true,
      help: false,
      printConfig: true,
      editor: "vscode",
      dest: "bla",
      name: "myapp",
      templateDir: "/tmp",
    })
  })

  test("--open", async () => {
    const sut = await cliConfig(
      {
        vueVersion: "2",
        open: false,
        help: false,
        printConfig: true,
        editor: "vscode",
        dest: "bla",
        name: "myapp",
        templateDir: "/tmp",
      },
      ["--open"]
    )
    expect(sut).toMatchObject({ open: true })
  })
  test("--no-open", async () => {
    const sut = await cliConfig(
      {
        vueVersion: "2",
        open: true,
        help: false,
        printConfig: true,
        editor: "vscode",
        dest: "bla",
        name: "myapp",
        templateDir: "/tmp",
      },
      ["--no-open"]
    )
    expect(sut).toMatchObject({ open: false })
  })
})
