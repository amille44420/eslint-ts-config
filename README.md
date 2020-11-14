# @amille/eslint-ts-config

![npm](https://img.shields.io/npm/v/@amille/eslint-ts-config)
![CircleCI](https://img.shields.io/circleci/build/github/amille44420/eslint-ts-config)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Eslint and prettier configuration with TypeScript support based on [@amille/eslint-config][amille-eslint-config]

[amille-eslint-config]: https://www.npmjs.com/package/@amille/eslint-config

## Installation

First you need to install [eslint] and [prettier].

Then install `@amille/eslint-ts-config`.

```sh
# using npm
npm install --save-dev @amille/eslint-ts-config

# or using yarn
yarn add -D @amille/eslint-ts-config
```


Then create a file named `.eslintrc.json` with following contents in the root folder of your project:

```json
{
    "root": true,
    "extends": ["@amille/eslint-ts-config"]
}
```
Then creat a file named `.prettierrc.json` along side the previous file, with the following contents.

```json
"@amille/eslint-ts-config"
```

## Variants

This package comes with two configurations

#### Default

The default configuration is based on `airbnb-base` and `prettier`.

```json
{
    "extends": ["@amille/eslint-ts-config"]
}
```

#### React

The react configuration is based on `airbnb`, `prettier` and `prettier/react`.

```json
{
    "extends": ["@amille/eslint-ts-config/react"]
}
```

[eslint]: https://www.npmjs.com/package/eslint
[prettier]: https://www.npmjs.com/package/prettier
