module.exports = {
  presets: [
    '@vue/app',
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage',
        'corejs': {
          'version': '2'
        }
      }
    ]
  ]
}
