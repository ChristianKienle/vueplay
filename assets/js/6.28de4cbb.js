(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{208:function(a,e,t){"use strict";t.r(e);var s=t(2),n=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),t("p",[t("em",[a._v("VuePlay")]),a._v(" is your personal Vue testing ground. Just a few seconds after running "),t("code",[a._v("vueplay")]),a._v(" from the command line you will have")]),a._v(" "),t("ul",[t("li",[a._v("a simple Vue app backed by "),t("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Vue CLI"),t("OutboundLink")],1),a._v(",")]),a._v(" "),t("li",[a._v("located in a temporary and unique directory,")]),a._v(" "),t("li",[a._v("being served on "),t("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[a._v("localhost:8080"),t("OutboundLink")],1),a._v(",")]),a._v(" "),t("li",[a._v("open in Visual Studio Code ready for you to "),t("em",[a._v("play around")]),a._v(".")])]),a._v(" "),t("h2",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[a._v("#")]),a._v(" Getting Started")]),a._v(" "),t("h3",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i -g @vue/cli-service-global\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i -g @ckienle/vueplay\n")])])]),t("p",[t("em",[a._v("VuePlay")]),a._v(" requires "),t("code",[a._v("@vue/cli-service-global")]),a._v(" to be installed globally. Otherwise it will not work.")]),a._v(" "),t("h3",{attrs:{id:"create-a-playground"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-playground","aria-hidden":"true"}},[a._v("#")]),a._v(" Create a Playground")]),a._v(" "),t("p",[a._v("It could not be any easier. Just run "),t("code",[a._v("vueplay")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("vueplay\n")])])]),t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[a._v("#")]),a._v(" Configuration")]),a._v(" "),t("p",[t("em",[a._v("VuePlay")]),a._v(" has a handful of options that you can adjust. Options are specified through the CLI.")]),a._v(" "),t("h3",{attrs:{id:"cli-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli-options","aria-hidden":"true"}},[a._v("#")]),a._v(" CLI Options")]),a._v(" "),t("p",[a._v("This is "),t("em",[a._v("VuePlay's")]),a._v(" usage description:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('Usage: vueplay [options]\n\nOptions:\n\n  --print-config  print resolved configuration, then exit\n  --editor        specify editor used to open the playground (default: code)\n  --no-open       do not open the playground (default: false)\n  --dest          playgrounds output directory (default: temporary directory)\n  --template-dir  specify a custom template for playgrounds (default: template\n                  directory that is shipped as part of vueplay)\n  --name          name format of the playground to be created in "dest"\n                  (default: ${randomId}). You can use the following placeholder:\n                  ${randomId}  will be replaced by a short random id\n  --help          output usage information\n\n  Options can also be specified by having a file called .vueplayrc.js in your\n  home directory. Options specified via the CLI override the optiones that are\n  also specified in the .vueplayrc.js config file.\n\n                      🦄  made by the Unicorn Syndicate 🦄\n')])])]),t("h3",{attrs:{id:"configuration-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file","aria-hidden":"true"}},[a._v("#")]),a._v(" Configuration File")]),a._v(" "),t("p",[a._v("You can configure everything also via a config file. "),t("em",[a._v("VuePlay")]),a._v(" expects a config file to be at "),t("code",[a._v("$HOME/.vueplayrc.js")]),a._v(". The config file must export a single object:")]),a._v(" "),t("p",[t("strong",[a._v("$HOME/.vueplayrc.js:")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  dest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/tmp"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("This config has the same effect as the "),t("code",[a._v("--dest")]),a._v("-option: It specifies the destination directory of playgrounds that are created by "),t("em",[a._v("VuePlay")]),a._v(".")]),a._v(" "),t("p",[a._v("All keys are optional. If not specified the default value is used. A full configuration file looks like this:")]),a._v(" "),t("p",[t("strong",[a._v("$HOME/.vueplayrc.js:")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  dest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/tmp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  printConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  help"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  editor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"code"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  open"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  templateDir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/my/template"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${randomId}"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"configuration-merging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-merging","aria-hidden":"true"}},[a._v("#")]),a._v(" Configuration Merging")]),a._v(" "),t("p",[a._v("You can configure "),t("em",[a._v("VuePlay")]),a._v(" by using command line options or a configuration file. Command line options always override options specified in the configuration file.")]),a._v(" "),t("h3",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("h4",{attrs:{id:"default-playground"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-playground","aria-hidden":"true"}},[a._v("#")]),a._v(" Default Playground")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("vueplay\n")])])]),t("h4",{attrs:{id:"playground-in-the-cwd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#playground-in-the-cwd","aria-hidden":"true"}},[a._v("#")]),a._v(" Playground in the "),t("code",[a._v("cwd")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("vueplay --dest "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n")])])]),t("h4",{attrs:{id:"custom-static-playground-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-static-playground-name","aria-hidden":"true"}},[a._v("#")]),a._v(" Custom (static) Playground Name")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("vueplay --dest "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(".")]),a._v(" --name helloworld\n")])])]),t("h4",{attrs:{id:"custom-playground-name-format"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-playground-name-format","aria-hidden":"true"}},[a._v("#")]),a._v(" Custom Playground Name Format")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("vueplay --dest ~ --name "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'prefix-"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${randomId}")]),a._v("'")]),a._v("\n")])])]),t("h4",{attrs:{id:"open-in-different-editor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-in-different-editor","aria-hidden":"true"}},[a._v("#")]),a._v(" Open in different Editor")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("vueplay --editor atom\n")])])]),t("h4",{attrs:{id:"disable-editor-integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable-editor-integration","aria-hidden":"true"}},[a._v("#")]),a._v(" Disable Editor Integration")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("vueplay --no-open\n")])])]),t("h2",{attrs:{id:"current-state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#current-state","aria-hidden":"true"}},[a._v("#")]),a._v(" Current State")]),a._v(" "),t("p",[t("em",[a._v("vueplay")]),a._v(" is currently tailored to "),t("strong",[a._v("my personal")]),a._v(" needs. This means that there is not way to configure "),t("em",[a._v("vueplay")]),a._v(" in any way. Running "),t("em",[a._v("vueplay")]),a._v(" gives you:")]),a._v(" "),t("ul",[t("li",[a._v("A very simple Vue project in a "),t("strong",[a._v("temporary & unique")]),a._v(" directory with the following files:\n"),t("ul",[t("li",[t("code",[a._v("App.vue")]),a._v(": Entry point of the whole playground.")]),a._v(" "),t("li",[t("code",[a._v("HelloWorld.vue")]),a._v(": A simple component which is used by "),t("code",[a._v("App.vue")]),a._v(".")]),a._v(" "),t("li",[t("code",[a._v("package.json")]),a._v(": Simply contains a "),t("code",[a._v("start")]),a._v("-script which runs "),t("code",[a._v("vue serve App.vue")])]),a._v(" "),t("li",[t("code",[a._v(".vscode/")]),a._v(": A Visual Studio Code configuration with a simple "),t("em",[a._v("Run")]),a._v("-action.")])])]),a._v(" "),t("li",[a._v("After the playground has been created "),t("em",[a._v("vueplay")]),a._v(" automatically\n"),t("ul",[t("li",[a._v("launches "),t("code",[a._v("vue serve App.vue")]),a._v(" and")]),a._v(" "),t("li",[a._v("opens the playground in Visual Studio Code")])])])])])},[],!1,null,null,null);e.default=n.exports}}]);