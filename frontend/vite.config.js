import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  proxy: {
    '/public/': {
      target: 'http://localhost:5050/uploads/images/',
      changeOrigin: true,
    },
  },
});
