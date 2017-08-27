# react-native-confirmation-code-input
A react-native confirmation code input for both IOS and Android

## Features
- A user-friendly component for inputting confirmation code
- Extended from [<TextInput/>](https://facebook.github.io/react-native/docs/textinput.html) component, so you can use its props
- Built-in type of code input: underline, box, circle
- Set position: center, left, right, full width
- Set size and active color, inactive color
- Easy to customize style, use base style from TextInput component
- Check code on finish or return code for async checking
- Clear code on fail
- Use React Native ES6
## Screenshots

![underline-28082017](https://thumbs.gfycat.com/InfiniteUnequaledGreendarnerdragonfly-size_restricted.gif)
![box-28082017](https://thumbs.gfycat.com/CourageousFrayedBronco-size_restricted.gif)
![circle-28082017](https://thumbs.gfycat.com/ClearcutAssuredHake-size_restricted.gif)
![full-28082017](https://thumbs.gfycat.com/WeeklyAltruisticBlackbear-size_restricted.gif)

## Installation

```sh
npm install react-native-confirmation-code-input --save
```

## Usage
### Basic
Import this module:  
```javascript
import CodeInput from 'react-native-confirmation-code-input';
```
Use as a component and style it:  
```javascript

render() {
  return (
    <CodeInput
      ref="codeInputRef1"
      secureTextEntry
      className={'border-b'}
      space={5}
      size={30}
      inputPosition='left'
      onFulfill={(code) => this._onFulfill(code)}
    />
    
    <CodeInput
      ref="codeInputRef2"
      secureTextEntry
      compareWithCode='AsDW2'
      activeColor='rgba(49, 180, 4, 1)'
      inactiveColor='rgba(49, 180, 4, 1.3)'
      autoFocus={false}
      ignoreCase={true}
      inputPosition='center'
      size={50}
      onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
      containerStyle={{ marginTop: 30 }}
      codeInputStyle={{ borderWidth: 1.5 }}
    />
    
    <CodeInput
      ref="codeInputRef2"
      keyboardType="numeric"
      codeLength={5}
      className='border-circle'
      compareWithCode='12345'
      autoFocus={false}
      codeInputStyle={{ fontWeight: '800' }}
      onFulfill={(isValid, code) => this._onFinishCheckingCode2(isValid, code)}
    />
  )
}
```

### props
This component uses the same props as [<TextInput/>](https://facebook.github.io/react-native/docs/textinput.html). Below are additional props for this component:  

Prop       | Type    | Default    | Description
---------- | ------- | ---------- | -----------------------
`codeLength`        | number   | 5            | length of confirmation code -> number of cells
`compareWithCode`   | string   |              | code to compare. if null, onFulfill callback return inputted code to check later
`inputPosition`     | string   | `center`     | position of code input in its container: `left`, `right`, `center`, `full-width`
`size`              | number   | 40           | size of input cells
`space`             | number   | 8            | space between 2 cells
`className`         | string   | `border-box` | Some built-in classname: `border-box`, `border-circle`, `border-b`, `border-b-t`, `border-l-r`
`cellBorderWidth`   | number   | 1.0          | width of cell borders
`activeColor`       | string   | `rgba(255, 255, 255, 1)`   | color of cells when active
`inactiveColor`     | string   | `rgba(255, 255, 255, 0.2)` | color of cells when inactive
`ignoreCase`        | boolean  | `false`      | ignore case when checking code
`autoFocus`         | boolean  | `true`       | auto focus on code input
`codeInputStyle`    | style object   |        | custom style for code input
`containerStyle`    | style object   |        | custom style for code input container
`onFulfill`         | function |              | callback function called when fulfilling code. If `compareWithCode` is null -> return `(code)` in callback, else return `(isValid, code)`. **Required**

## functions
clear input:
```javascript
this.refs.refName.clear();
...
<CodeInput 
    ...
    ref="refName"
/>
```
## Example
See [EXAMPLE](example)
```sh
git clone https://github.com/ttdung11t2/react-native-confirmation-code-input.git
cd react-native-confirmation-code-input/example
npm install
react-native run-ios / react-native run-android
```
## License

react-native-confirmation-code-input is released under the MIT license. See [LICENSE](LICENSE) for details.  
  
Any question or support will welcome.