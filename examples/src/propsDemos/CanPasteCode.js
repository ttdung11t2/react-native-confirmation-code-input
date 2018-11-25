import React from 'react';
import { View, Text } from 'react-native';
import CodeFiled from 'react-native-confirmation-code-field';

import styles from '../commonStyles';

export default function CanPasteCode() {
  return (
    <View style={styles.rootView}>
      <Text style={styles.typing}>canPasteCode?: boolean</Text>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{'canPasteCode={true}'}</Text>
        <CodeFiled onFulfill={console.log} canPasteCode />
      </View>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{`canPasteCode={${
          CodeFiled.defaultProps.canPasteCode
        }} (default)`}</Text>
        <CodeFiled onFulfill={console.log} />
      </View>
    </View>
  );
}
