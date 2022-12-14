module.exports = {
  comments: false,
  minified: true,
  ignore: ['./src/ecmascript-core'],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        // useBuiltIns: 'usage',
        // corejs: '3.8',
      },
    ],
  ],
};
