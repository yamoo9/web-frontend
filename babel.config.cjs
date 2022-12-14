module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 5% in KR, defaults, not dead, ie 11',
        useBuiltIns: 'entry',
      },
    ],
  ],
};
