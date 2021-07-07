import { Plugin } from "vite";

export interface Options {
	libraryName: string;
	style?: string | boolean | ((name: string, file?: any) => string);
	styleLibraryDirectory?: string;
	customName?: (name: string, file: any) => string;
	customStyleName?: (name: string) => string;
	libraryDirectory?: string;
	camel2DashComponentName?: boolean;
}

declare function usePluginImport(options?: Options): Plugin;

export default usePluginImport;
