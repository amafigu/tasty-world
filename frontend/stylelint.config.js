/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['stylelint-config-standard-scss'],
    },
    {
      files: ['*.vue', '**/*.vue'],
      extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue/scss'],
    },
  ],
  rules: {
    'color-no-invalid-hex': [true, { message: 'Expect right color hex' }],
  },
}
