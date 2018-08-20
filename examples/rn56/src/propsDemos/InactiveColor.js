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
          {'inactiveColor="rgba(255, 255, 255, 0.2)" (default)'}
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
