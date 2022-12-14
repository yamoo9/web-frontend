module.exports = {
  comments: false,
  minified: true,
  ignore: ['./src/ecmascript-core', './src/ecmascript-next'],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        // useBuiltIns: 'usage',
        // corejs: '3.26.1',
      },
    ],
  ],
};
