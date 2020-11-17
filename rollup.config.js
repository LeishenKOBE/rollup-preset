import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/index.js",
    name: "preset",
    format: "cjs",
  },
  plugins: [
    babel({
      exclude: "/node_modules/**",
      babelHelpers: "bundled",
    }),
    commonjs(),
    resolve(),
    terser()
  ],
};
