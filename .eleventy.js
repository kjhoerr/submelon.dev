// @ts-check
require("ts-node").register({
  files: true,
  compilerOptions: {
    module: "commonjs",
  },
})

const { default: eleventyConfig } = require("./src/config.ts")

module.exports = eleventyConfig