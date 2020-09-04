module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "react/jsx-props-no-spreading": 2,
        "react/button-has-type": 0,
        "react/jsx-props-no-spreading": 0,
        "react/prop-types": 0,
        "react-hooks/exhaustive-deps": 0,
        "react/jsx-boolean-value": [2, "always"],
        "import/prefer-default-export": 2,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "no-plusplus": 0,
    },
};
