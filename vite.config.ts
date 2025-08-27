import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/python-training-get-data/", // ← GitHub上のリポジトリ名に合わせる
  plugins: [vue()],
});
