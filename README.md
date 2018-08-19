# react-native-confirmation-code-field

A react-native confirmation code input for both IOS and Android (base on [this](https://github.com/ttdung11t2/react-native-confirmation-code-input) dead project)

## [MIgration Guide](migration.md)

## Features
- A user-friendly component for inputting confirmation code
- Built-in type of code input: underline, box, circle
- Custom position: center, left, right, full width
- Easy to customize style
- Check code on finish or return code for async checking
- Clear code on fail

## Screenshot
![Screenshot example](https://pp.userapi.com/c849128/v849128506/5b03e/d74sP8ztSX8.jpg)

## Installation

```sh
npm install react-native-confirmation-code-field
# or
yarn add react-native-confirmation-code-field
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


### Props

| Prop                    | Type         | Default                    | Description                                                                                                                                                             |
| ----------------------- | ------------ | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onFulfill`             | function     |                            | Callback function called when fulfilling code. If `compareWithCode` is null -> return `(code)` in callback, else return `(code, isValid)`. **Required**                 |
| **Configurate**         |              |                            |                                                                                                                                                                         |
| `autoFocus`             | boolean      | `true`                     | Auto focus on code input                                                                                                                                                |
| `codeLength`            | number       | 5                          | Length of confirmation code -> number of cells                                                                                                                          |
| `defaultCode`           | string       | null                       | Default code value, must be the same length as `codeLength`                                                                                                             |
| `compareWithCode`       | string       |                            | Code to compare. if `null`, `onFulfill` callback return inputted code to check later                                                                                    |
| `ignoreCaseWhenCompareCode` | boolean      | `false`                    | Ignore case when checking code                                                                                                                                          |
| **Style**               |              |                            |                                                                                                                                                                         |
| `activeColor`           | string       | `rgba(255, 255, 255, 1)`   | Color of cells when active                                                                                                                                              |
| `cellBorderWidth`       | number       | 1.0                        | Width of cell borders                                                                                                                                                   |
| `inactiveColor`         | string       | `rgba(255, 255, 255, 0.2)` | Color of cells when inactive                                                                                                                                            |
| `inputPosition`         | string       | `center`                   | Position of code input in its container: `left`, `right`, `center`, `full-width`                                                                                        |
| `size`                  | number       | 40                         | Size of input cells                                                                                                                                                     |
| `space`                 | number       | 8                          | Space between 2 cells                                                                                                                                                   |
| `variant`               | string       | `border-box`               | Some built-in classname: `border-box`, `border-circle`, `border-b`, `border-b-t`, `border-l-r`, `clear`                                                                 |
| **Customize**           |              |                            |                                                                                                                                                                         |
| getInputProps           | function     |                            | [`<TextInput/>` component props](https://facebook.github.io/react-native/docs/textinput#props), `(index: number) => Object`                       |
| getCodeInputStyle       | function     |                            | Help customize any input, must return [Style Object](https://facebook.github.io/react-native/docs/textinput#style) or `null`, (example)[examples/rn56/App.js#L111-L116] |
| containerProps          | Object       |                            |  [`<View/>` component props](https://facebook.github.io/react-native/docs/view#props)                                                                                   |
| **Other**               |              |                            |                                                                                                                                                                         |
| `testID`                | any          |                            | Help in test                                                                                                                                                            |

### Functions

#### `clear()` method:

```js
import React, { Component, createRef } from 'react';
import CodeInput from 'react-native-confirmation-code-field';

class App extends Component {
  inputRef = createRef();

  handlerOnIvalidCode() {
    this.inputRef.current.clear();
  }

  render() {
    return (
      <CodeInput
        ref={this.inputRef}
        // ...
      />
    );
  }
}
```

## Example

### See [EXAMPLE](examples/rn56/App.js#L5-L124)

### Usage:

```sh
git clone https://github.com/retyui/react-native-confirmation-code-field

cd react-native-confirmation-code-field/examples/rn56

npm install

react-native run-ios
#or
react-native run-android
```



## Demo

![Preview example](https://thumbs.gfycat.com/TameLittleBarnacle-size_restricted.gif)
