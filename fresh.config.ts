// @ts-ignore
import { defineConfig } from "$fresh/server.ts";
// @ts-ignore
import twindPlugin from "$fresh/plugins/twind.ts"
// @ts-ignore
import twindConfig from "./twind.config.ts";
export default defineConfig({
  plugins: [twindPlugin(twindConfig)]
});
