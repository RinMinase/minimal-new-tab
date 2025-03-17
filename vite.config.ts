import { defineConfig, PluginOption } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { viteSingleFile } from "vite-plugin-singlefile";
import tailwindcss from "@tailwindcss/vite";

const SingleFileConfig = {
  ...viteSingleFile(),
  enforce: "post",
  apply: "build",
} as PluginOption;

export default defineConfig({
  plugins: [svelte(), tailwindcss(), SingleFileConfig],
  server: {
    port: 3000,
    host: true,
  },
});
