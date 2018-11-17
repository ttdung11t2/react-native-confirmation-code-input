import React from 'react';
import { View } from 'react-native';

// eslint-disable-next-line
const LinearGradient = ({ colors, style, ...props }) => (
  <View {...props} style={[style, { backgroundColor: colors[0] }]} />
);

// export default LinearGradient;
export default require('react-native-linear-gradient');
