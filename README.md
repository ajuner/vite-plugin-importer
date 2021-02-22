# vite-plugin-import

use babel-plugin-import in vite

## use

```js
// vite.config.js
import { defineConfig } from "vite";
import usePluginImport from './src/index.js'
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
