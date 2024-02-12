# 개발환경 설정

## 0. LICENSE 파일 생성 (MIT)

```
MIT License

Copyright (c) 2024 TeTedo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 1. npm 초기화

```
npm init - y
```

## 2. gitignore 파일 생성 및 업데이트

[gitignore.io](https://www.toptal.com/developers/gitignore)에서 설정

키워드 : `react` `macOS`

추가 설정

```
package-lock.json
/dist/
```

## 3. TypeScript 설정

### TypeScript 설치

```bash
npm i -D typescript
```

### tsconfig.json 파일 생성

```bash
npx tsc --init
```

### tsconfig 파일 react 커스텀

```json
{
  "compilerOptions": {
    "target": "es5", // ECMAScript 타겟 버전을 지정합니다: "ES5"는 모든 브라우저에서 널리 지원됩니다.
    "lib": ["dom", "dom.iterable", "esnext"], // DOM, DOM Iterable API, 최신 ECMAScript 사양의 기능에 대한 타입 정의를 포함합니다.
    "allowJs": true, // JavaScript 파일의 컴파일을 허용합니다.
    "skipLibCheck": true, // 선언 파일(*.d.ts)의 타입 검사를 건너뜁니다.
    "esModuleInterop": true, // CommonJS와 ES 모듈 간의 상호 운용성을 활성화합니다.
    "allowSyntheticDefaultImports": true, // 기본 내보내기가 없는 모듈에서 기본 가져오기를 허용합니다.
    "strict": true, // 모든 엄격한 타입 검사 옵션을 활성화합니다.
    "forceConsistentCasingInFileNames": true, // 동일한 파일에 대한 일관성 없는 대소문자 참조를 금지합니다.
    "noFallthroughCasesInSwitch": true, // switch문에서 fallthrough 경우에 대해 오류를 보고합니다.
    "module": "esnext", // 모듈 코드 생성을 지정합니다: "esnext"는 최신 버전의 ECMAScript 모듈 구문을 대상으로 합니다.
    "moduleResolution": "node", // 모듈이 어떻게 해석되는지 결정합니다. "node"는 Node.js 스타일 해석을 위해 사용됩니다.
    "resolveJsonModule": true, // .json 파일을 가져올 수 있습니다.
    "isolatedModules": true, // 다른 가져오기에 의존하지 않고 각 파일을 안전하게 변환할 수 있음을 보장합니다.
    "noEmit": true, // 출력을 내보내지 않습니다 (예: .ts 파일에서 .js 파일을 생성하지 않음).
    "jsx": "react-jsx", // .tsx 파일에서 JSX를 지원합니다
    "baseUrl": "src" // 상대적이지 않은 모듈 이름을 해석하는 기본 디렉토리입니다.
  },
  "include": ["src", "jest.setup.js"],
  "typeRoots": ["./types"]
}
```

## 4. ESLint 설정

```bash
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react
```

### eslint init

```bash
npx eslint --init

@eslint/create-config@0.4.6
- Ok to proceed? (y) y

How would you like to use ESLint? …
- To check syntax, find problems, and enforce code style

What type of modules does your project use? …
- JavaScript modules (import/export)

Which framework does your project use? …
- React

Does your project use TypeScript?
- Yes

Where does your code run?
- Browser

How would you like to define a style for your project? …
- Use a popular style guide

Which style guide do you want to follow? …
-  Standard: https://github.com/standard/eslint-config-standard-with-typescript

What format do you want your config file to be in? …
- JavaScript

eslint-plugin-react@latest eslint-config-xo@latest ...
? Would you like to install them now? › No / Yes
- Yes

Which package manager do you want to use? …
- npm
```

### .eslintrc.js

```js
module.exports = {
    "env": {
      "browser": true,
      "es2021": true
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
```

### .eslintignore 파일 생성

```
/node_modules/
/dist/
```

### /.vscode/settings.json

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 5. React 설치

```terminal
npm i react react-dom
npm i -D @types/react @types/react-dom
```

## 6. Webpack 적용

bundler 비교 참고 - [Parcel vs Rollup vs Webpack 비교](https://velog.io/@subin1224/Parcel-vs-Rollup-vs-Webpack-%EB%B9%84%EA%B5%90)

Webpack 적용 참고 - [React 18 웹팩&바벨 수동 설정하기](https://juni-official.tistory.com/248)

```
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin clean-webpack-plugin dotenv-webpack @pmmmwh/react-refresh-webpack-plugin
npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
npm i -D cross-env dotenv
```

### webpack.config.js

```js
/**
 * https://juni-official.tistory.com/248
 *
 */

const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';
const envPath = `./.env.${isDevelopment ? 'dev' : 'prod'}`;

dotenv.config({
  path: envPath,
});

const config = {
  name: 'React-webpack-babel-setting',
  mode: 'development',
  devtool: 'eval',
  entry: {
    app: './src/index.tsx',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: envPath,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html', // 템플릿 설정
      minify:
        process.env.NODE_ENV === 'production'
          ? {
              collapseWhitespace: true, // 빈칸 제거
              removeComments: true, // 주석 제거
            }
          : false,
    }),
    new webpack.ProvidePlugin({
      // 리액트 자동 주입
      React: 'react',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  devServer: {
    static: './dist',
    port: 3000,
    hot: true, // 핫 모듈 교체(HMR) 활성화
    compress: true,
    open: true,
    historyApiFallback: true,
  },
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = config;
```

### babel.config.js

```js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
```

## 7. Jest 설치

```bash
npm i -D jest ts-jest @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event identity-obj-proxy jest-environment-jsdom jest-plugin-context/setup babel-jest

```

### jest.config.js

```js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './jest.setup',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};
```

## 8. package.json

```

```

## 9. CI - github actions, gitlab runner

### (1) .github/workflows/react-ci.yml

```yml
name: React CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      fail-fast: false
      matrix:
        node-version: [18.x]

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install dependencies
        run: npm install
      - name: Run linter
        run: npm run lint
      - name: Run tests
        run: npm run test
      - name: Build
        run: npm run build
```

### (2) .gitlab-ci.yml

```yml
image: node:18

cache:
  paths:
    - node_modules/

stages:
  - install
  - lint
  - test
  - build

install_dependencies:
  stage: install
  script:
    - npm install

lint:
  stage: lint
  script:
    - npm run lint
  only:
    - main

test:
  stage: test
  script:
    - npm run test
  only:
    - main

build:
  stage: build
  script:
    - npm run build
  only:
    - main
```
