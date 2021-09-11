module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "indent": "off",
    "vue/max-attributes-per-line": 'off',
    "eol-last": 0,
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxEOF": 0
    }],
    "space-before-blocks": "off",
    "quotes": "off",
    "no-extra-semi": "off"
  }
}
