# Gatsby Bug Repro #18243

## Parser Plugin

This workspace house 3 repo:

- packages/blog-remark: The official blog starter
- packages/blog-mdx: [MDX blog stater](https://www.gatsbyjs.org/starters/hagnerd/gatsby-starter-blog-mdx/), converted from the official one by @hagnerd.
- packages/plugin-remark-parser: The plugin that exhibit the bug

Here's the plugin for this repro in full. The only thing it does is setting an array of parser plugins & log out the options passed to `setParserPlugins`.

```js
/* packages/plugin-remark-parser */

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

```

## Step to reproduce

1. Setup

```
git clone https://github.com/d4rekanguok/gatsby-bug-repro-18243.git && cd gatsby-bug-repro-18243

yarn install
```

2. Bug behavior

From workspace root, run the remark blog starter:

```
yarn dev:remark
```

Notice that the plugin logged out the following:
```
-----Parser Plugin Options-----
{ options: { plugins: [], foo: 'bar' } }
-----Parser Plugin Options-----
```

---

From workspace root, run the mdx blog starter:

```
yarn dev:mdx
```

Notice that the plugin logged out the following:
```
-----Parser Plugin Options-----
{ options: undefined }
-----Parser Plugin Options-----
```