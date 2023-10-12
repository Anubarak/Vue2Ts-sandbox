module.exports = {
    root: true,
    "env": {
        "browser": true,
        "node": true,
        'vue/setup-compiler-macros': true
    },
    extends: [
        "plugin:vue/recommended",
        "eslint:recommended"
    ],
    rules: {
        "keyword-spacing": ["error", {before: true, after: true}],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "vue/html-indent": ["error", 4],
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        'no-console': 'off',
        'no-debugger': 'off',
        'no-unused-vars': 'off',
        'no-empty-pattern': 'off',
        'vue/order-in-components': 'off',
        'vue/no-v-html': 0,
        'no-undef': 0,
        'vue/multi-word-component-names': 'off'
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    }
};
