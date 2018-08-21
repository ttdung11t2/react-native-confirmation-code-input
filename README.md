# 
react-native-confirmation-code-field

[![npm](https://img.shields.io/npm/v/react-native-confirmation-code-field.svg)](https://www.npmjs.com/package/react-native-confirmation-code-field)
[![AppVeyor](https://img.shields.io/appveyor/ci/retyui/react-native-confirmation-code-field.svg?label=windows)](https://ci.appveyor.com/project/retyui/react-native-confirmation-code-field)
[![Travis](https://img.shields.io/travis/retyui/react-native-confirmation-code-field.svg?label=unix)](https://travis-ci.org/retyui/react-native-confirmation-code-field)

A react-native confirmation code field for both IOS and Android (base on [this](https://github.com/ttdung11t2/react-native-confirmation-code-input) project [Migration Guide](migration.md))

## Links
* [API](API.md)
* [Real Example](examples/rn56)
* [Live demo](https://snack.expo.io/@retyui/demo-for-react-native-confirmation-code-field)


## Screenshots
<img width="250" src="https://raw.githubusercontent.com/retyui/react-native-confirmation-code-field/master/docs/img/redDemo.jpg"/>
<img width="250" src="https://raw.githubusercontent.com/retyui/react-native-confirmation-code-field/master/docs/img/darkDemo.jpg"/>
![Preview example](https://thumbs.gfycat.com/EllipticalCleverIberianmidwifetoad-size_restricted.gif)

## Install

```sh
yarn add react-native-confirmation-code-field
# or
npm install react-native-confirmation-code-field
```

## Usage

```js
import React, { Component } from 'react';
import CodeInput from 'react-native-confirmation-code-field';

class App extends Component {
  handlerOnFulfill = code => console.log(code);

  render() {
    return <CodeInput onFulfill={this.handlerOnFulfill} />;
  }
}
```
