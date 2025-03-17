import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  preprocess: vitePreprocess(),
  onwarn: (warning, handler) => {
    // suppress warnings on `vite dev` and `vite build`
    if (warning.code.includes("a11y")) return;
    handler(warning);
  },
};
