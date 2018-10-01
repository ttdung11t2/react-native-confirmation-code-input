import React, { Component } from 'react';
import { Alert, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CodeFiled from 'react-native-confirmation-code-field';

import styles from './styles';

export default class RedExample extends Component {
  onFinishCheckingCode = (code, isValid) => {
    // "isValid" prop will be "true|false" when you set "compareWithCode" prop
    if (!isValid) {
      return Alert.alert(
        'Confirmation Code',
        'Code not match!',
        [{ text: 'OK' }],
        {
          cancelable: false,
        },
      );
    }

    Alert.alert('Confirmation Code', 'Successful!', [{ text: 'OK' }], {
      cancelable: false,
    });
  };

  inputStyle = (index, isActive, hasValue) => {
    if (hasValue) {
      return styles.inputNotEmpty;
    }
    return null;
  };

  inputProps = () => ({
    keyboardType: 'numeric',
    style: styles.input,
  });

  containerProps = { style: styles.inputWrapStyle };
  colors = ['#ff595f', '#e42959'];
  render() {
    /*concept : https://dribbble.com/shots/3246445-OTP-Screen-2-0*/
    return (
      <LinearGradient colors={this.colors} style={styles.linearGradient}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Verification Code</Text>
          <Text style={styles.inputSubLabel}>
            Please type the validation code sent
          </Text>
          <Text style={styles.inputSubLabel}>to + 375 (25) 666 00 00</Text>
          <CodeFiled
            variant="clear"
            codeLength={6}
            compareWithCode="123456"
            inputProps={this.inputProps}
            inputStyle={this.inputStyle}
            containerProps={this.containerProps}
            onFulfill={this.onFinishCheckingCode}
          />
          <View style={styles.nextButton}>
            <View style={styles.nextButtonArrow} />
          </View>
        </View>
      </LinearGradient>
    );
  }
}
