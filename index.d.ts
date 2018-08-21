import * as React from 'react';
import * as ReactNative from 'react-native';

declare module 'react-native-confirmation-code-input' {
  type INDEX = number;
  type InputPositions = 'left' | 'right' | 'center' | 'full-width';
  type VariantNames =
    | 'border-box'
    | 'border-circle'
    | 'border-b'
    | 'border-b-t'
    | 'border-l-r'
    | 'clear';

  interface ConfirmationCodeInputProps {
    codeLength?: number;
    defaultCode?: string;
    compareWithCode?: string;
    ignoreCaseWhenCompareCode?: boolean;

    activeColor?: string;
    cellBorderWidth?: number;
    inactiveColor?: string;
    inputPosition?: InputPositions;
    size?: number;
    space?: number;
    variant?: VariantNames;

    autoFocus?: boolean;
    // isMatching will be true|false when "compareWithCode" prop isn't empty string
    onFulfill: (code: string, isMatching?: boolean) => void;
    onChangeCode?: (code: string) => void;

    getInputProps?: (index: INDEX) => ReactNative.TextInputProps;
    // help set custom style to any inputs
    getCodeInputStyle?: (
      index: INDEX,
      isFocused: boolean,
      hasValue: boolean,
    ) => Object;
    containerProps?: ReactNative.ViewProps;

    testID?: any;
  }

  export default class ConfirmationCodeInput extends React.Component<
    ConfirmationCodeInputProps,
    any
  > {
      clear(): void;
  }
}
