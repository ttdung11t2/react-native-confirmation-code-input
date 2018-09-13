import React from 'react';
import { Text, View } from 'react-native';
import CodeFiled from 'react-native-confirmation-code-field';

import styles from '../commonStyles';

export default function Variant() {
  return (
    <View style={styles.rootView}>
      <Text style={styles.typing}>variant?: ENUM()</Text>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{`variant="${
          CodeFiled.defaultProps.variant
        }" (default)`}</Text>
        <CodeFiled />
      </View>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{'variant="border-circle"'}</Text>
        <CodeFiled variant="border-circle" />
      </View>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{'variant="border-b"'}</Text>
        <CodeFiled variant="border-b" />
      </View>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{'variant="border-b-t"'}</Text>
        <CodeFiled variant="border-b-t" />
      </View>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{'variant="border-l-r"'}</Text>
        <CodeFiled variant="border-l-r" />
      </View>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{'variant="clear"'}</Text>
        <CodeFiled variant="clear" />
      </View>
    </View>
  );
}
