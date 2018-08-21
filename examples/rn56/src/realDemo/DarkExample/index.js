import React, { Component, createRef } from 'react';
import { Alert, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CodeFiled from 'react-native-confirmation-code-field';

import styles from './styles';

const horizontalGradient = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
};

const upToDownGradient = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
};

export default class DarkExample extends Component {
  // TODO: dispatch check action here
  onFinishCheckingCode = code => {
    if (code === 'MUR AMUR') {
      return Alert.alert('Confirmation Code', 'Successful!', [{ text: 'OK' }], {
        cancelable: false,
      });
    }

    Alert.alert('Confirmation Code', 'Code not match!', [{ text: 'OK' }], {
      cancelable: false,
    });

    // If code does not match, clear input with: this.refs.codeInputRef1.clear()
    this.codeInputRef.current.clear();
  };

  getCodeInputStyle = (index, isActive, hasValue) => {
    if (hasValue) {
      return styles.inputNotEmpty;
    }
    return null;
  };

  getInputProps = () => ({
    keyboardType: 'numeric',
    style: styles.input,
  });

  static containerProps = { style: styles.inputWrapStyle };

  static buttonColors = ['#8096ee', '#a571ff'];

  static rootColors = ['#2f3d6c', '#161e3c'];

  codeInputRef = createRef();

  render() {
    /*concept : https://dribbble.com/shots/4766183-Code-Verification-UI-Design */
    return (
      <LinearGradient
        {...upToDownGradient}
        colors={DarkExample.rootColors}
        style={styles.linearGradient}
      >
        <View>
          <Text style={styles.inputLabel}>Confirmation</Text>
          <Text style={styles.inputSubLabel}>
            Please enter the code sent we sent to the number + 375 (25) xxxx xx
            13
          </Text>
          <CodeFiled
            ref={this.codeInputRef}
            inputPosition="full-width"
            variant="clear"
            codeLength={4}
            getInputProps={this.getInputProps}
            getCodeInputStyle={this.getCodeInputStyle}
            containerProps={DarkExample.containerProps}
            onFulfill={this.onFinishCheckingCode}
          />
          <Text style={styles.resetCode}>RESEND CODE</Text>
          <LinearGradient
            {...horizontalGradient}
            colors={DarkExample.buttonColors}
            style={styles.nextButton}
          >
            <Text style={styles.nextButtonText}>Confirm</Text>
          </LinearGradient>
        </View>
      </LinearGradient>
    );
  }
}
