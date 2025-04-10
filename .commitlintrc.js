module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'docs', 'feat', 'fix', 'mod', 'refactor', 'style'],
    ],
  },
};
