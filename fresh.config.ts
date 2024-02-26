// @ts-ignore
import { defineConfig } from "$fresh/server.ts";
// @ts-ignore
import twindPlugin from "$fresh/plugins/twind.ts";
// @ts-ignore
import twindConfig from "./twind.config.ts";
// @ts-ignore
import { ga4Plugin } from "https://deno.land/x/fresh_ga4@0.0.4/mod.ts";
export default defineConfig({
  plugins: [ga4Plugin(), twindPlugin(twindConfig)],
});
