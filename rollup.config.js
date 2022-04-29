import { terser } from "rollup-plugin-terser";
import { babel } from "@rollup/plugin-babel";
const license = require('rollup-plugin-license');

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
  plugins: [
    babel(), 
    license({
      banner: `Copyright - <%= moment().format('YYYY') %> 
      JustGoodCookies
      Created by Francesco Mugnai 
      Released under MIT License
      If you use this script, you will always remain the sole responsible party, use it at your own risk
      https://github.com/francescomugnai/just-good-cookies`,
    }),],
};