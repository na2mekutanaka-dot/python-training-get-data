import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// https://vite.dev/config/
export default defineConfig({
  base: "/python-training-get-data/", // ← GitHub上のリポジトリ名に合わせる
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Vuetify プラグインを追加
  ],
});
