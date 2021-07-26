import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

function plugins() {
  return [json(), resolve(), commonjs({
    sourceMap: false,
  })];
}

export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/index.esm.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: plugins(),
}];
