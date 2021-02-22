# vite-plugin-import

use babel-plugin-import in vite

## use

config same as [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```js
// vite.config.js
import { defineConfig } from "vite";
import usePluginImport from 'vite-plugin-importer'
export default defineConfig({
  plugins: [
    ... // other plugins
    usePluginImport({
      libraryName: "ant-design-vue",
      libraryDirectory: "es",
      style: "css",
    }),
  ];
})

```
