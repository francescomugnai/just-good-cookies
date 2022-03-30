import { terser } from "rollup-plugin-terser";
import { babel } from "@rollup/plugin-babel";

export default {
  input: "src/justgoodcookies.js",
  output: [
    {
      file: "dist/justgoodcookies.js",
      format: "umd",
      name: "justgoodcookies",
    },
    {
      file: "dist/justgoodcookies.min.js",
      format: "umd",
      name: "justgoodcookies",
      plugins: [terser()],
    },
    {
      file: "dist/justgoodcookies.esm.js",
      format: "es",
      plugins: [terser()],
    },
  ],
  plugins: [babel()],
};
