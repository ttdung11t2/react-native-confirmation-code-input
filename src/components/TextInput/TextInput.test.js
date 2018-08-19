import React from 'react';
import { shallow } from 'enzyme';

import Component from './index';

const defaultProps = {
  id: '',
  onChangeText: () => {},
  onFocus: () => {},
  forwardRef: () => {},
};

const render = props => shallow(<Component {...defaultProps} {...props} />);

test('must call onChangeText with text and id property', () => {
  const onChangeText = jest.fn();
  const id = 99;
  const wrap = render({
    id,
    onChangeText,
  });

  expect(onChangeText).toHaveBeenCalledTimes(0);

  const text = 'text';

  wrap.prop('onChangeText')(text);

  expect(onChangeText).toHaveBeenCalledTimes(1);
  expect(onChangeText).toHaveBeenCalledWith(text, id);
});

test('must call onFocus with id property', () => {
  const onFocus = jest.fn();
  const id = 99;
  const wrap = render({
    id,
    onFocus,
  });

  expect(onFocus).toHaveBeenCalledTimes(0);

  wrap.prop('onFocus')();

  expect(onFocus).toHaveBeenCalledTimes(1);
  expect(onFocus).toHaveBeenCalledWith(id);
});

test('must call forwardRef with ref and id', () => {
  const forwardRef = jest.fn();
  const id = 99;
  const wrap = render({
    id,
    forwardRef,
  });

  expect(forwardRef).toHaveBeenCalledTimes(0);

  const ref = { ref: 'ref' };

  wrap.instance().inputRef(ref);

  expect(forwardRef).toHaveBeenCalledTimes(1);
  expect(forwardRef).toHaveBeenCalledWith(ref, id);
});
