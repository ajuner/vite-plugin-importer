import babelImport from 'babel-plugin-import';
import babel from '@babel/core';
import importMeta from '@babel/plugin-syntax-import-meta';

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

export default usePluginImport
