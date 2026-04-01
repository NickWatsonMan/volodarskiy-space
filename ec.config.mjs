import { defineEcConfig } from "astro-expressive-code";

export default defineEcConfig({
  themes: ["github-light", "kanagawa-wave"],
  styleOverrides: {
    borderRadius: "var(--radius-m)",
  },
});
