// @flow
import type { PropsTypeCustomValidatorFn } from './types';

export const validateCompareCode: PropsTypeCustomValidatorFn = (
  props,
  propName,
  componentName,
) => {
  const compareWithCode = props[propName];

  if (compareWithCode) {
    const { codeLength } = props;

    if (compareWithCode.length !== codeLength) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Validation failed. ${propName} length  is not equal to "codeLength" (${
          compareWithCode.length
        } !== ${codeLength}).`,
      );
    }
  }
};

const notOverwrittenProps = [
  'maxLength',
  'value',
  'onChangeText',
  'onFocus',
  'onKeyPress',
];

export const validateInputProps = (props: ?Object): void => {
  const p = props;

  if (typeof p === 'object' && p != null) {
    notOverwrittenProps.forEach(key => {
      if (p[key]) {
        console.warn(`You can\'t set "${key}" property to TextInput`);
      }
    });
  }
};
