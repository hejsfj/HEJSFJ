import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        "display": ["Playfair Display"],
        "body": ["Inter"],
      },
    },
  },
} as Options;
