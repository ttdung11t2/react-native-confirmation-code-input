import React from 'react';
import { View, Text } from 'react-native';
import CodeFiled from 'react-native-confirmation-code-field';

import styles from '../commonStyles';

export default function InactiveColor() {
  return (
    <View style={styles.rootView}>
      <Text style={styles.typing}>inactiveColor?: string</Text>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{'inactiveColor="red"'}</Text>
        <CodeFiled inactiveColor="red" />
      </View>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>
          {`inactiveColor="${CodeFiled.defaultProps.inactiveColor}" (default)`}
        </Text>
        <CodeFiled />
      </View>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{'inactiveColor="blue"'}</Text>
        <CodeFiled inactiveColor="blue" />
      </View>
    </View>
  );
}
