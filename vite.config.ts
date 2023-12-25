import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "path";
import { env } from "process";

export default defineConfig({
  plugins: [solid()],
  define: {
    "process.env": env,
  },
  resolve: {
    alias: {
      "@styles": `${path.resolve(__dirname, "./src/styles/")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@hooks": `${path.resolve(__dirname, "./src/core/hooks/")}`,
      "@types": `${path.resolve(__dirname, "./src/core/types/")}`,
      "@contexts": `${path.resolve(__dirname, "./src/core/contexts/")}`,
      "@components": `${path.resolve(__dirname, "./src/core/components/")}`,
      "@services": `${path.resolve(__dirname, "./src/core/services/")}`,
    },
  },
});
