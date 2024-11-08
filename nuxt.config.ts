import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  alias: {
    "styled-system": resolve("./styled-system"),
  },

  css: ["@/styles/css/global.css"],

  postcss: {
    plugins: {
      "@pandacss/dev/postcss": {},
    },
  },

  modules: ["@nuxtjs/storybook"],
});