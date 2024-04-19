module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
    },
    extends: ["eslint:recommended", "prettier"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "warn",
        indent: ["error", 4],
        semi: ["error", "always"],
        quotes: ["error", "double"],
    },
};
