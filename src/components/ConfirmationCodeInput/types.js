// @flow
import type { SyntheticEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import type { KeyboardType } from 'react-native/Libraries/Components/TextInput/TextInput';
import type { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';

import type { VariantNames, InputPositions } from '../../types';

export type KeyPressEvent = SyntheticEvent<{|
  +key: string,
|}>;

export type Props = $ReadOnly<{|
  codeLength?: number,
  defaultCode?: string,

  activeColor?: string,
  cellBorderWidth?: number,
  inactiveColor?: string,
  inputPosition?: InputPositions,
  size?: number,
  space?: number,
  variant?: VariantNames,
  keyboardType?: KeyboardType,
  maskSymbol?: string,

  autoFocus?: boolean,
  canPasteCode?: boolean,

  onFulfill: (code: string) => void,
  onChangeCode?: (code: string) => void,

  inputProps?: (index: number) => Object,
  // Help set a custom style to any inputs
  inputStyle?: (index: number, isFocused: boolean, hasValue: boolean) => Object,
  containerProps?: ViewProps,

  testID?: any,
|}>;

export type State = {|
  codeSymbols: Array<string>,
  currentIndex: number,
|};

export type PropsTypeCustomValidatorFn = (
  props: Object,
  propName: string,
  componentName: string,
) => ?Error;
