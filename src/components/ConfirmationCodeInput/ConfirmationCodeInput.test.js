import React from 'react';
import { shallow } from 'enzyme';

import ConfirmationCodeInput from './ConfirmationCodeInput';
import TextInput from '../TextInput';

const defaultProps = { onFulfill: () => {} };

export const spy = (component, methodName) => {
  if (component.instance()[methodName]) {
    // eslint-disable-next-line no-undef
    const newMethod = jest.fn();

    component.instance()[methodName] = newMethod;

    return newMethod;
  }

  throw new Error(`Method: ${methodName} undefined in instance`);
};

const render = props =>
  shallow(<ConfirmationCodeInput {...defaultProps} {...props} />);

describe('onKeyPress', () => {
  test("must do nothing when key code isn't Backspace", () => {
    const wrap = render();
    const event = {
      nativeEvent: {
        key: 'AnyKey',
      },
    };

    const setFocus = spy(wrap, 'setFocus');

    wrap
      .find(TextInput)
      .first()
      .prop('onKeyPress')(event);
    expect(setFocus).toHaveBeenCalledTimes(0);
  });

  test('must call setFocus with 0 when keyPress Backspace', () => {
    const wrap = render();
    const event = {
      nativeEvent: {
        key: 'Backspace',
      },
    };

    const setFocus = spy(wrap, 'setFocus');

    wrap
      .find(TextInput)
      .first()
      .prop('onKeyPress')(event);

    expect(setFocus).toHaveBeenCalledTimes(1);
    expect(setFocus).toHaveBeenCalledWith(0);
  });

  test('must call setFocus with 1+ when keyPress Backspace and currentIndex is greater than one', () => {
    const wrap = render();
    const currentIndex = 2;

    wrap.setState({
      currentIndex,
    });
    const event = {
      nativeEvent: {
        key: 'Backspace',
      },
    };

    const setFocus = spy(wrap, 'setFocus');

    wrap
      .find(TextInput)
      .first()
      .prop('onKeyPress')(event);

    expect(setFocus).toHaveBeenCalledTimes(1);
    expect(setFocus).toHaveBeenCalledWith(currentIndex - 1);
  });
});

test('TextInput count must be equal codeLength', () => {
  const codeLength = 12;
  const wrap = render({
    codeLength,
  });

  expect(wrap.find(TextInput).length).toBe(codeLength);
});

test('must assign custom props to TextInput', () => {
  const overWrittenProps = {
    maxLength: 99,
    value: '11',
    onChangeText: () => {},
    onFocus: () => {},
    onKeyPress: () => {},
  };
  const willBeAssigned = {
    a: 'b',
    b: 'a',
  };
  const inputProps = jest.fn(() => ({
    ...overWrittenProps,
    ...willBeAssigned,
  }));

  const codeLength = 3;
  const wrap = render({
    codeLength,
    inputProps,
  });

  expect(inputProps).toHaveBeenCalledTimes(codeLength);

  const props = wrap
    .find(TextInput)
    .first()
    .props();

  expect(props).toEqual(expect.objectContaining(willBeAssigned));
  expect(props).not.toEqual(expect.objectContaining(overWrittenProps));
});

test('must change index and set value when text change', () => {
  const wrap = render();

  const setFocus = spy(wrap, 'setFocus');

  const [index, text] = [0, '1'];

  expect(wrap.state()).toEqual({
    codeSymbols: ['', '', '', '', ''],
    currentIndex: 0,
  });

  wrap
    .find(TextInput)
    .first()
    .prop('onChangeText')(text, index);

  expect(setFocus).toHaveBeenCalledTimes(1);
  expect(setFocus).toHaveBeenCalledWith(index + 1);

  wrap.update();

  expect(wrap.state()).toEqual({
    codeSymbols: [text, '', '', '', ''],
    currentIndex: 1,
  });
});

test('must call onFulfill and blur from last input when the code is full', () => {
  const onFulfill = jest.fn();
  const wrap = render({
    codeLength: 2,
    onFulfill,
  });

  const blur = spy(wrap, 'blur');

  // fix undefined ref
  spy(wrap, 'setFocus');

  expect(wrap.state()).toEqual({
    codeSymbols: ['', ''],
    currentIndex: 0,
  });

  const [index, text] = [0, '1'];

  wrap
    .find(TextInput)
    .get(index)
    .props.onChangeText(text, index);

  const [index2, text2] = [1, '2'];

  wrap
    .update()
    .find(TextInput)
    .get(index2)
    .props.onChangeText(text2, index2);

  expect(onFulfill).toHaveBeenCalledTimes(1);
  expect(onFulfill).toHaveBeenCalledWith(`${text}${text2}`);

  expect(blur).toHaveBeenCalledTimes(1);
  expect(blur).toHaveBeenCalledWith(index2);
});

test('must call inputStyle', () => {
  const inputStyle = jest.fn();
  const codeLength = 4;

  render({
    inputStyle,
    codeLength,
  });

  expect(inputStyle).toHaveBeenCalledTimes(codeLength);
  expect(inputStyle).toHaveBeenCalledWith(1, false, false);
  expect(inputStyle).toHaveBeenCalledWith(2, false, false);
  expect(inputStyle).toHaveBeenCalledWith(3, false, false);
});

describe('onFocus', () => {
  test('must call onChangeCode when current index changed', () => {
    const onChangeCode = jest.fn();
    const wrap = render({
      codeLength: 3,
      onChangeCode,
    });

    wrap
      .find(TextInput)
      .get(0)
      .props.onFocus(0);

    const index = 2;
    const codeSymbols = ['1', '2', ''];

    wrap
      .setState({
        codeSymbols,
        currentIndex: index - 1,
      })
      .find(TextInput)
      .get(index)
      .props.onFocus(index);

    expect(onChangeCode).toHaveBeenCalledTimes(1);
    expect(onChangeCode).toHaveBeenCalledWith(codeSymbols.join(''));
  });

  test('must skip to call onChangeCode when onChangeCode is falsy', () => {
    const wrap = render({
      codeLength: 3,
      onChangeCode: undefined,
    });

    wrap
      .find(TextInput)
      .get(0)
      .props.onFocus(0);

    wrap
      .find(TextInput)
      .get(0)
      .props.onFocus(0);
  });

  test('must clear all values after the focused element', () => {
    const wrap = render({
      codeLength: 5,
    });

    const codeSymbols = ['1', '2', '3', '4', ''];
    const focusElIndex = 1;

    wrap
      .setState({
        codeSymbols,
        currentIndex: 3,
      })
      .find(TextInput)
      .get(focusElIndex)
      .props.onFocus(focusElIndex);

    expect(wrap.state()).toEqual({
      codeSymbols: ['1', '', '', '', ''],
      currentIndex: 1,
    });
  });

  test("must call setFocus when focused element isn't last empty element", () => {
    const wrap = render({
      codeLength: 5,
    });
    const testResult = 'test';
    const setFocus = spy(wrap, 'setFocus').mockReturnValue(testResult);

    const codeSymbols = ['1', '2', '', '', ''];
    const focusElIndex = 4;

    expect(
      wrap
        .setState({
          codeSymbols,
          currentIndex: 2,
        })
        .find(TextInput)
        .get(focusElIndex)
        .props.onFocus(focusElIndex),
    ).toBe(testResult);

    expect(setFocus).toHaveBeenCalledWith(2);
  });
});

describe('canPasteCode', () => {
  test('must fill all code when the user inserted the text equal or greater than the codeLength', () => {
    const onFulfill = jest.fn();
    const wrap = render({
      codeLength: 4,
      onFulfill,
      canPasteCode: true,
    });

    const blur = spy(wrap, 'blur');

    // fix undefined ref
    spy(wrap, 'setFocus');

    expect(wrap.state()).toEqual({
      codeSymbols: ['', '', '', ''],
      currentIndex: 0,
    });

    const [index, text] = [0, '123456'];

    wrap
      .find(TextInput)
      .get(index)
      .props.onChangeText(text, index);

    expect(onFulfill).toHaveBeenCalledTimes(1);
    expect(onFulfill).toHaveBeenCalledWith(`${text.slice(0, 4)}`);

    expect(blur).toHaveBeenCalledTimes(1);
    expect(blur).toHaveBeenCalledWith(index);
  });
  test('must fill one section of code input when canPasteCode=false and user inserted the text equal or greater than the codeLength', () => {
    const onFulfill = jest.fn();
    const wrap = render({
      codeLength: 4,
      onFulfill,
      canPasteCode: false,
    });

    const blur = spy(wrap, 'blur');

    // fix undefined ref
    spy(wrap, 'setFocus');

    expect(wrap.state()).toEqual({
      codeSymbols: ['', '', '', ''],
      currentIndex: 0,
    });

    const [index, text] = [0, '123456'];

    wrap
      .find(TextInput)
      .get(index)
      .props.onChangeText(text, index);

    expect(onFulfill).toHaveBeenCalledTimes(0);
    expect(blur).toHaveBeenCalledTimes(0);

    expect(wrap.state()).toEqual({
      codeSymbols: [text[0], '', '', ''],
      currentIndex: 1,
    });
  });
});
