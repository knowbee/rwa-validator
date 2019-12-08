# rwa-validator

[![Build Status](https://travis-ci.org/knowbee/rwa-validator.svg?branch=master)](https://travis-ci.org/knowbee/rwa-validator)
[![Maintainability](https://api.codeclimate.com/v1/badges/3f5c5282ff06934496dd/maintainability)](https://codeclimate.com/github/knowbee/rwa-validator/maintainability)
[![npm](https://img.shields.io/npm/dt/rwa-validator.svg)](https://www.npmjs.com/package/rwa-validator)
[![Dependency Status](https://david-dm.org/knowbee/rwa-validator.svg)](https://david-dm.org/knowbee/rwa-validator)
[![npm](https://img.shields.io/npm/v/rwa-validator.svg)](https://www.npmjs.com/package/rwa-validator)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

[![NPM](https://nodei.co/npm/rwa-validator.png)](https://nodei.co/npm/rwa-validator/)

A fast minimal package to validate Rwandan National Ids and Phone Numbers(all carriers) using Regular Expressions.

## Installation

```js
npm install rwa-validator
```

or

```js
yarn add rwa-validator
```

or

## Usage

- Validating Phone Number

  ```js
  const { isNationalId, isPhoneNumber } = require("rwa-validator");

  isPhoneNumber("0788854444"); // true
  isPhoneNumber("0778854444"); // false
  ```

- Validating National ID
  ```js
  // must be 16 digit numbers
  isNationalId("1199672222000040"); // true
  isNationalId("1201772222000040"); // false
  ```

# Contribution

- Please before making a PR, read first this [Contributing Guideline](./CONTRIBUTING.md)

## License

MIT

## Author

Igwaneza Bruce
