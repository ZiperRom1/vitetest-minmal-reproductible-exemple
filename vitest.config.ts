import { fileURLToPath, URL } from "url";
import { configDefaults, defineConfig } from 'vitest/config';

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";


export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  test: {
    // @todo Bug files not ignored => https://github.com/vitest-dev/vitest/issues/1668
    exclude: [...configDefaults.exclude, '.{pnp.cjs,pnp.loader.mjs}'],
    environment: 'happy-dom',
    coverage: {
      reporter: ['cobertura', 'text']
    }
  }
});
