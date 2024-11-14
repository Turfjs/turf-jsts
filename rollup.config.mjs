import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "src/index.js",
    plugins: [
      nodeResolve(),
      babel({ presets: ["@babel/env"], babelHelpers: "bundled" }),
    ],
    output: [
      {
        file: "dist/jsts.min.js",
        format: "umd",
        name: "jsts",
        sourcemap: true,
        plugins: [terser()],
      },
    ],
  },
];
