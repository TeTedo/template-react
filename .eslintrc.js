module.exports = {
    "env": {
      "browser": true,
      "es2021": true,
      "jest" : true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "@typescript-eslint",
    ],
    "rules": {
        indent: ['error', 2], // 코드의 들여쓰기는 공백 2칸을 사용
        'no-trailing-spaces': 'error', // 줄 끝에 불필요한 공백이 있으면 안 됩니다.
        curly: 'error', // 모든 제어문(if, for, while 등)에 중괄호를 사용해야 합니다.
        'brace-style': 'error', // 중괄호의 스타일은 1TBS(One True Brace Style)을 따라야 합니다.
        'no-multi-spaces': 'error', // 여러 개의 공백이 연속으로 있으면 안 됩니다.
        'space-infix-ops': 'error', // 연산자 주변에는 공백이 하나 있어야 합니다.
        'space-unary-ops': 'error', // 단항 연산자와 그 피연산자 사이에는 공백이 있어야 하거나 없어야 합니다.
        'no-whitespace-before-property': 'error', // 속성에 접근할 때 속성 이름 전에 공백이 있으면 안 됩니다.
        'func-call-spacing': 'error', // 함수를 호출할 때 함수 이름과 호출 괄호 사이에 공백이 있으면 안 됩니다.
        'space-before-blocks': 'error', // 코드 블록({})을 시작하기 전에 공백이 하나 있어야 합니다.
        'keyword-spacing': ['error', { before: true, after: true }], // 키워드(if, else 등) 전후에는 공백이 있어야 합니다.
        'comma-spacing': ['error', { before: false, after: true }], // 쉼표 다음에는 공백이 있어야 하고, 쉼표 앞에는 공백이 있으면 안 됩니다.
        'comma-style': ['error', 'last'], // 쉼표는 항상 줄의 끝에 위치해야 합니다.
        'comma-dangle': ['error', 'always-multiline'], // 여러 줄을 사용하는 배열이나 객체에서는 마지막 항목 뒤에 항상 쉼표를 붙여야 합니다.
        'space-in-parens': ['error', 'never'], // 괄호 안에는 공백이 있으면 안 됩니다.
        'block-spacing': 'error', // 블록을 열고 닫는 중괄호 사이에는 공백이 있어야 합니다.
        'array-bracket-spacing': ['error', 'never'], // 배열 괄호([]) 안에는 공백이 있으면 안 됩니다.
        'object-curly-spacing': ['error', 'always'], // 객체 리터럴의 중괄호({}) 안에는 항상 공백이 있어야 합니다.
        'key-spacing': ['error', { mode: 'strict' }], // 객체의 키와 값 사이에는 일관된 공백이 있어야 합니다.
        'arrow-spacing': ['error', { before: true, after: true }], // 화살표 함수의 화살표(=>) 전후에는 공백이 있어야 합니다.
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }
