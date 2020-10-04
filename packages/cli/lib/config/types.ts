export type VueVersion =
| "2"
| "3"

export interface Config {
  open: boolean
  help: boolean
  printConfig: boolean
  editor: string
  dest: string
  name: string
  templateDir: string
  vueVersion: VueVersion
}