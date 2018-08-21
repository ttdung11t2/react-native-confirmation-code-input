import React from 'react';
import { View, Text } from 'react-native';
import CodeFiled from 'react-native-confirmation-code-field';

import styles from '../commonStyles';

export default function Space() {
  return (
    <View style={styles.rootView}>
      <Text style={styles.typing}>space?: number</Text>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{`space={1}`}</Text>
        <CodeFiled space={1} />
      </View>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{`space={${
          CodeFiled.defaultProps.space
        }} (default)`}</Text>
        <CodeFiled />
      </View>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{`space={32}`}</Text>
        <CodeFiled space={32} />
      </View>
    </View>
  );
}
