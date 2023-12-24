import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls: { video: ["src", "poster"] } },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/styles/main.scss";
        `,
      },
    },
  },
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "./",
});
