const config = {
    env: {
        browser: true,
        jest: true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:import/errors",
        "plugin:import/warnings",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react",
    ],
    plugins: ["react", "react-hooks", "import", "@typescript-eslint", "prettier", "react-perf", "emotion"],
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    rules: {
        // javascript
        indent: ["error", 4],
        indent: ["error", 4, { SwitchCase: 1 }],
        eqeqeq: "error",
        "no-console": "error",
        "no-debugger": "error",
        "no-submodule-imports": "off",
        "default-case": "error",
        "no-var": "error",
        "prefer-const": "error",
        "max-classes-per-file": "off",
        "explicit-function-return-type": "off",

        // typescript
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-object-literal-type-assertion": "off",
        "@typescript-eslint/prefer-interface": "off",

        // react
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prefer-stateless-function": "error",
        "react/display-name": "off",
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/jsx-no-bind": "error",

        // performance
        "react-perf/jsx-no-new-object-as-prop": "off", // performance check: new object as prop
        "react-perf/jsx-no-new-array-as-prop": "error", // performance check: new array as prop
        "react-perf/jsx-no-jsx-as-prop": "off", // performance check: new function as prop

        // emotion
        "emotion/jsx-import": "error",
        "emotion/no-vanilla": "error",
        "emotion/import-from-emotion": "error",
        "emotion/styled-import": "error",

        // import
        "import/no-unresolved": "off",
        "no-restricted-imports": [
            "error",
            {
                paths: [
                    {
                        name: "lodash",
                        message: "Don't use lodash directly!",
                    },
                    {
                        name: "@material-ui/core",
                        message:
                            "Don't use @material-ui/core directly! Read https://material-ui.com/guides/minimizing-bundle-size/",
                    },
                    {
                        name: "index",
                        message: "/index gets resolved automatically, no need to specify",
                    },
                ],
            },
        ],
    },
};

module.exports = config;
