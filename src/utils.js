// @flow

import type { InputPositions, VariantNames } from './types';

export const isMatchingCode = (
  code: string,
  compareWithCode: string,
  ignoreCase: boolean,
): boolean => {
  if (ignoreCase) {
    return code.toLowerCase() === compareWithCode.toLowerCase();
  }

  return code === compareWithCode;
};

export const getInputSpaceStyle = (
  space: number,
  inputPosition: InputPositions,
) => {
  switch (inputPosition) {
    case 'left':
      return {
        marginRight: space,
      };
    case 'center':
      return {
        marginRight: space / 2,
        marginLeft: space / 2,
      };
    case 'right':
      return {
        marginLeft: space,
      };
    default:
      return {
        marginRight: 0,
        marginLeft: 0,
      };
  }
};

type Options = {
  +cellBorderWidth: number,
  +activeColor: string,
  +inactiveColor: string,
  +inputSpaceStyle: Object,
};

export const getClassStyle = (
  variant: VariantNames,
  active: boolean,
  { inputSpaceStyle, cellBorderWidth, activeColor, inactiveColor }: Options,
) => {
  const classStyle = { ...inputSpaceStyle, color: activeColor };

  const borderColor = active ? activeColor : inactiveColor;

  switch (variant) {
    case 'clear':
      return { ...classStyle, borderWidth: 0 };
    case 'border-box':
      return { ...classStyle, borderWidth: cellBorderWidth, borderColor };
    case 'border-circle':
      return {
        ...classStyle,
        borderWidth: cellBorderWidth,
        borderRadius: 50,
        borderColor,
      };
    case 'border-b':
      return {
        ...classStyle,
        borderBottomWidth: cellBorderWidth,
        borderColor,
      };
    case 'border-b-t':
      return {
        ...classStyle,
        borderTopWidth: cellBorderWidth,
        borderBottomWidth: cellBorderWidth,
        borderColor,
      };
    case 'border-l-r':
      return {
        ...classStyle,
        borderLeftWidth: cellBorderWidth,
        borderRightWidth: cellBorderWidth,
        borderColor,
      };
    default:
      // eslint-disable-next-line
      (variant: empty);

      return null;
  }
};
