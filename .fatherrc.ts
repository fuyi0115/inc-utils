export default {
  entry: 'src/index.ts',
  esm: 'babel',
  cjs: 'babel',
  umd: {
    name: 'incUtils',
    minFile: true,
    file: 'inc-utils',
    sourcemap: true,
  }
};
