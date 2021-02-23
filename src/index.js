const babelImport = require('babel-plugin-import');
const babel = require('@babel/core');
const importMeta = require('@babel/plugin-syntax-import-meta');

function usePluginImport(options){

  return {
    name: 'vite-plugin-import',

    transform(code, id) {

      if (/\.[j|t][sx|s]|vue$/.test(id)) {
        const plugins = [importMeta, [babelImport, options]]

        const result = babel.transformSync(code, {
          ast: true,
          plugins,
          sourceFileName: id
        })

        return {
          code: result.code,
          map: result.map
        }
      }
    },
  };
};

module.exports = usePluginImport