import { defineEcConfig } from "astro-expressive-code";

export default defineEcConfig({
  themes: ["github-light", "github-dark"],
  useDarkModeMediaQuery: false,
  themeCssRoot: "body",
  themeCssSelector: (theme) => (theme.type === "dark" ? ".dark" : false),
});
