import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitePluginForArco } from '@arco-plugins/vite-vue'

import electron from "vite-plugin-electron"
import electronRenderer from "vite-plugin-electron-renderer" 
import polyfillExports from "vite-plugin-electron-renderer" 
 
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'


export default defineConfig(({ mode }) => ({
  base: mode == 'development' ? '' : './',
  plugins: [
    vue(),
    Components({
      extensions:['vue','md'],
      resolvers:[
        ElementPlusResolver({
          importStyle:'sass',
        }),
      ],
      dts:'src/components.d.ts',
    }),
  //   vitePluginForArco({
  //     style: 'css'
  //   }),
  //   electron([{
  //     entry: "electron-main/index.ts", // 主进程文件
  //   },
  //   {
  //     entry: 'electron-preload/preload.ts'
  //   }
  // ]),
  //   electronRenderer(),
  //   polyfillExports(),
  ],
  build: {
    emptyOutDir: false, // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录
    outDir: "dist-electron"
  },
}))