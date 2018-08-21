import React from 'react';
import { View, Text } from 'react-native';
import CodeFiled from 'react-native-confirmation-code-field';

import styles from '../commonStyles';

export default function InputPosition() {
  return (
    <View style={styles.rootView}>
      <Text style={styles.typing}>inputPosition?: ENUM()</Text>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{'inputPosition="left"'}</Text>
        <CodeFiled inputPosition="left" />
      </View>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{'inputPosition="right"'}</Text>
        <CodeFiled inputPosition="right" />
      </View>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{`inputPosition="${
          CodeFiled.defaultProps.inputPosition
        }" (default)`}</Text>
        <CodeFiled />
      </View>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{'inputPosition="full-width"'}</Text>
        <CodeFiled inputPosition="full-width" />
      </View>
    </View>
  );
}
