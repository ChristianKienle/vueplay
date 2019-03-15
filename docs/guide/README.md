---
displayAllHeaders: true
sidebar: auto
title: Guide
---
## Introduction

*VuePlay* is your personal Vue testing ground. Just a few seconds after running `vueplay` from the command line you will have

- a simple Vue app backed by [Vue CLI](https://cli.vuejs.org/),
- located in a temporary and unique directory,
- being served on [localhost:8080](http://localhost:8080),
- open in Visual Studio Code ready for you to *play around*.

## Getting Started
### Installation

```sh
npm i -g @vue/cli-service-global
npm i -g @ckienle/vueplay
```

*VuePlay* requires `@vue/cli-service-global` to be installed globally. Otherwise it will not work.


### Create a Playground

It could not be any easier. Just run `vueplay`:

```sh
vueplay
```

## Configuration

*VuePlay* has a handful of options that you can adjust. Options are specified through the CLI.

### CLI Options
This is *VuePlay's* usage description:

```
Usage: vueplay [options]

Options:

  --editor        specify editor used to open the playground (default: code)
  --no-open       do not open the playground (default: false)
  --dest          playgrounds output directory (default: temporary directory)
  --template-dir  specify a custom template for playgrounds (default: template
                  directory that is shipped as part of vueplay)
  --name          name format of the playground to be created in "dest"
                  (default: ${randomId}). You can use the following placeholder:
                  ${randomId}  will be replaced by a short random id
  --help          output usage information
```

### CLI Examples

#### Default Playground

```sh
vueplay
```

#### Playground in the `cwd`

```sh
vueplay --dest .
```

#### Custom (static) Playground Name

```sh
vueplay --dest . --name helloworld
```

#### Custom Playground Name Format
```sh
vueplay --dest ~ --name 'prefix-${randomId}'
```

#### Open in different Editor
```sh
vueplay --editor atom
```

#### Disable Editor Integration
```sh
vueplay --no-open
```
## Current State


*vueplay* is currently tailored to **my personal** needs. This means that there is not way to configure *vueplay* in any way. Running *vueplay* gives you:

- A very simple Vue project in a **temporary & unique** directory with the following files:
  - `App.vue`: Entry point of the whole playground.
  - `HelloWorld.vue`: A simple component which is used by `App.vue`.
  - `package.json`: Simply contains a `start`-script which runs `vue serve App.vue`
  - `.vscode/`: A Visual Studio Code configuration with a simple *Run*-action.
- After the playground has been created *vueplay* automatically
  - launches `vue serve App.vue` and
  - opens the playground in Visual Studio Code
