import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

/**
 * Static site generation: prerenders every route into dist/ so GitHub Pages
 * can serve plain HTML without a server.
 */
export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.preview.tsx", "@qwik-city-plan"],
      },
    },
    plugins: [
      staticAdapter({
        origin: "https://juaniplanes.github.io",
      }),
    ],
  };
});
