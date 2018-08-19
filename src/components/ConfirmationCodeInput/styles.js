// @flow
import { StyleSheet } from 'react-native';

import type { InputPositions } from '../../types';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },

  codeInput: {
    backgroundColor: 'transparent',
    padding: 0,
    textAlign: 'center',
  },

  containerStyleCenter: { justifyContent: 'center' },
  containerStyleDefault: { justifyContent: 'space-between' },
  containerStyleLeft: { justifyContent: 'flex-start' },
  containerStyleRight: { justifyContent: 'flex-end' },
});

export const getContainerStyle = (position: InputPositions): * => {
  switch (position) {
    case 'center':
      return styles.containerStyleCenter;
    case 'left':
      return styles.containerStyleLeft;
    case 'right':
      return styles.containerStyleRight;
    default:
      return styles.containerStyleDefault;
  }
};
