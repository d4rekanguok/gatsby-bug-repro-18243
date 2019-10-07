// no-op
function plugin() {}
function main() {}

main.setParserPlugins = (options) => {
  console.log(`-----Parser Plugin Options-----`)
  console.log({ options })
  console.log(`-----Parser Plugin Options-----`)
  return [[ plugin, options]];
}

module.exports = main
