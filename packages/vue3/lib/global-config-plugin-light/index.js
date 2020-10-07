// @ts-check

// This directory contains a stripped down version of
// https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service-global.
// The stripped down version makes it possible to use vueplay without installing
// @vue/cli-service-global globally. The stripped down version is heavily modified to fit vueplays needs.
// The original license can be found at the bottom of this file. Thanks Evan 😍.

const path = require("path")
const { findExisting } = require("./util")
// eslint-disable-next-line node/no-extraneous-require
const resolve = require("resolve")

module.exports = function createConfigPlugin (context) {
  return {
    id: "vueplay",
    apply: (api) => {
      api.chainWebpack(config => {
        const modulePath = path.resolve(require.resolve("vue"), "../../../")
        config.resolveLoader
          .modules
          .add(modulePath)

        // add resolve alias for vue and vue-hot-reload-api
        // but prioritize versions installed locally.
        try {
          resolve.sync("vue", { basedir: context })
        } catch (e) {
          // this resolves to the local vue dependency (v3)
          const vuePath = path.dirname(require.resolve("vue"))
          // The v2 version of this code (@vueplay/vue2) has the following code:
          // ```js
          // const aliasTarget =  `${vuePath}/${options.compiler ? "vue.esm.js" : "vue.runtime.esm.js"}`
          // ```
          // The files references above (vue.esm.js, …) do no longer exist in
          // v3. For now we simply use index.js.
          const aliasTarget =  `${vuePath}/dist/vue.runtime.esm-bundler.js`
          config.resolve.alias
            .set("vue$",aliasTarget)
        }

        try {
          resolve.sync("vue-hot-reload-api", { basedir: context })
        } catch (e) {
          config.resolve.alias
            // eslint-disable-next-line node/no-extraneous-require
            .set("vue-hot-reload-api", require.resolve("vue-hot-reload-api"))
        }

        const babelOptions = {
          presets: [require.resolve("@vue/cli-plugin-babel/preset")]
        }

        // set inline babel options
        config.module
          .rule("js")
          .include
          .clear()
          .end()
          .exclude
          .add(/node_modules/)
          .add(/@vue\/cli-service/)
          .end()
          .uses
          .delete("cache-loader")
          .end()
          .use("babel-loader")
          .tap(() => babelOptions)

        // set html plugin template
        const indexFile = findExisting(context, [
          "index.html",
          "public/index.html"
        ]) || path.resolve(__dirname, "../template/index.html")
        config
          .plugin("html")
          .tap(args => {
            args[0].template = indexFile
            return args
          })
      })
    }
  }
}

// The MIT License (MIT)

// Copyright (c) 2017-present, Yuxi (Evan) You

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
