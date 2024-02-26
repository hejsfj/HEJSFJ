import { defineConfig } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import { ga4Plugin } from "https://deno.land/x/fresh_ga4@0.0.4/mod.ts";
export default defineConfig({
  plugins: [ga4Plugin(), twindPlugin(twindConfig)],
});
