# vite-plugin-importer

Integration for babel-plugin-import

## use

config same as [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```
npm install vite-plugin-impoter --save
yarn add vite-plugin-impoter
```

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

## LICENSE
[MIT](./LICENSE)
