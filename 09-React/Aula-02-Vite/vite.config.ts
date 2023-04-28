import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslistPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslistPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.tsx"],
    }),
  ],
});
