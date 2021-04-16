module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": ["airbnb", "airbnb/hooks", "plugin:@typescript-eslint/recommended"],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".ts", ".tsx"]
            }
        }
    },
    "ignorePatterns": [
        "**/*.js",
        "**/hrp-widget/lib/*",
        "**/hrp-client-web/dist/*"
    ],
    "rules": {
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off", // https://github.com/benmosher/eslint-plugin-import/issues/1174 해결되면 제거
        "import/extensions": ["error", "ignorePackages", {"ts": 'never', "tsx": 'never'}],
        "import/no-unresolved": "off",
        "import/export": "off",

        "@typescript-eslint/explicit-module-boundary-types": "off", // export 함수는 반환형식 지정 필수 검사
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/ban-types": ["error", {
            "types": {
                "{}": false
            }
        }],
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-namespace": "off",

        "@typescript-eslint/no-use-before-define": ["warn"],
        "no-use-before-define": "off",

        "@typescript-eslint/no-shadow": "error",
        "no-shadow": "off", // replaced by ts-eslint rule below

        "indent": ["error", 4, {"SwitchCase": 1}],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/prop-types": "off",

        "react/button-has-type": "off",
        "react/destructuring-assignment": ["warn"],
        "react/jsx-props-no-spreading": "off",
        "react/jsx-curly-brace-presence": "off", // <App>{"Hello world"}</App>; 에서 {} 필요없는지 검사
        "react/jsx-filename-extension": [2, {"extensions": [".js", ".jsx", ".ts", ".tsx"]}],
        "react/jsx-tag-spacing": ["error", {"beforeSelfClosing": "never"}],
        "react/sort-comp": "off",
        "react/require-default-props": "off",
        "react/no-unused-prop-types": ["warn"],
        "react/jsx-one-expression-per-line": "off",

        "quotes": "off",
        "quote-props": ["error", "consistent"],
        "comma-dangle": "off",
        "linebreak-style": "off",
        "max-len": ["error", 180],
        "arrow-body-style": "off",
        "object-curly-spacing": ["error", "never"],
        "object-curly-newline": ["error", {"consistent": true}],
        "lines-between-class-members": ["error", "always", {"exceptAfterSingleLine": true}],
        "padded-blocks": "off",
        "arrow-parens": ["error", "as-needed"],
        "prefer-destructuring": ["warn"],

        "class-methods-use-this": "off",
        "default-case": "off",
        "no-useless-escape": "warn",
        "no-plusplus": "off",
        "no-console": ["error", {"allow": ["warn", "error"]}],
        "no-return-await": "off",
        "no-useless-constructor": "warn",
        "max-classes-per-file": ["warn", 4],
        "prefer-template": "off"
    }
};
