module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
    ],
    rules: {
      'vue/no-multiple-template-root': 'off', // 오류 비활성화
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
  };