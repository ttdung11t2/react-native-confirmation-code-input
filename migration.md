# Migrate to this version

It's bad idea:
"~~This component uses the same props as . Below are additional props for this component:~~"

Now use new property `getInputProps`, example:

```js
const TextInputPropsObject = {
  secureTextEntry: true,
};

<CodeInput 
  getInputProps={(index: number) => TextInputPropsObject}
   // ...
/>;
```

---

### `onFulfill` changed the method signature

When `compareWithCode` not falsy, method will be called with such arguments:

`onFulfill = (code:string, isValid: boolean) => void`

_used to be so:_

~~`onFulfill = (isValid: boolean, code:string) => void`~~

---

| Deprecated Prop  | Description                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| `codeInputStyle` | Use `getCodeInputStyle(index,isFocused,hasValue)` to set custom style, (example)[examples/rn56/App.js#L111-L116] |
| `containerStyle` | Use `containerProps` to set style, (example)[examples/rn56/App.js#L89-L91]                                       |
| `ignoreCase`     | Renamed, use `whenCompareIgnoreCase`                                                                             |
| `className`      | Renamed, use `variant`                                                                                           |
