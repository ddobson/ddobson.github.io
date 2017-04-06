module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
      "comma-spacing": 2,
      "key-spacing": [
        "error", {
          "align": {
            "beforeColon": false,
            "afterColon": false,
            "on": "value"
          }
        }
      ],
      "no-console": 1,
      "prefer-const": 2,
      "prefer-arrow-callback": 1,
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "never"
      ],
      "no-var": 2,
      "dot-notation": [
          "warn"
      ],
      "object-curly-spacing": [
          "warn",
          "always"
      ]
    }
};
