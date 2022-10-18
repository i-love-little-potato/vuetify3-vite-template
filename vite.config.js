import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

export default defineConfig({
    plugins: [
        vue(),
        vuetify({autoImport: true}),
        AutoImport({imports: ['vue','vue-router']}),
        Components({dirs: ["src/components","src/pages"]}),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    }
})
