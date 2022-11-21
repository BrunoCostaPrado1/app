import { defineConfig } from "vite";
export default defineConfig({
  server: {
    type: Number,
    port: 8080,
  },
  preview: {
    port: 8080,
  },
});
