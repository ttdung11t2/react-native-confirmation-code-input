import React, { Component } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';

import styles from './styles';
import CodeInput from '../../src/components/ConfirmationCodeInput';

export default class ExampleApp extends Component {
  _onFulfill(code) {
    // TODO: call API to check code here
    // If code does not match, clear input with: this.refs.codeInputRef1.clear()
    if (code === 'Q234E') {
      Alert.alert('Confirmation Code', 'Successful!', [{ text: 'OK' }], {
        cancelable: false,
      });
    } else {
      Alert.alert('Confirmation Code', 'Code not match!', [{ text: 'OK' }], {
        cancelable: false,
      });

      this.refs.codeInputRef1.clear();
    }
  }

  _onFinishCheckingCode1(isValid) {
    console.log(isValid);
    if (!isValid) {
      Alert.alert('Confirmation Code', 'Code not match!', [{ text: 'OK' }], {
        cancelable: false,
      });
    } else {
      Alert.alert('Confirmation Code', 'Successful!', [{ text: 'OK' }], {
        cancelable: false,
      });
    }
  }

  _onFinishCheckingCode2(isValid, code) {
    console.log(isValid);
    if (!isValid) {
      Alert.alert('Confirmation Code', 'Code not match!', [{ text: 'OK' }], {
        cancelable: false,
      });
    } else {
      this.setState({ code });
      Alert.alert('Confirmation Code', 'Successful!', [{ text: 'OK' }], {
        cancelable: false,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>CODE INPUT DEMO</Text>
          </View>

          <View style={styles.inputWrapper1}>
            <Text style={styles.inputLabel1}>UNDERLINE CONFIRMATION CODE</Text>
            <CodeInput
              ref="codeInputRef1"
              secureTextEntry
              className={'border-b'}
              space={5}
              size={30}
              inputPosition="left"
              onFulfill={code => this._onFulfill(code)}
            />
          </View>

          <View style={styles.inputWrapper2}>
            <Text style={styles.inputLabel2}>BOX CONFIRMATION CODE</Text>
            <CodeInput
              ref="codeInputRef2"
              secureTextEntry
              compareWithCode="AsDW2"
              activeColor="rgba(49, 180, 4, 1)"
              inactiveColor="rgba(49, 180, 4, 1.3)"
              autoFocus={false}
              ignoreCase={true}
              inputPosition="center"
              size={50}
              onFulfill={isValid => this._onFinishCheckingCode1(isValid)}
              containerStyle={{ marginTop: 30 }}
              codeInputStyle={{ borderWidth: 1.5 }}
            />
          </View>

          <View style={styles.inputWrapper3}>
            <Text style={styles.inputLabel3}>CIRCLE CONFIRMATION CODE</Text>
            <CodeInput
              ref="codeInputRef2"
              keyboardType="numeric"
              codeLength={5}
              className={'border-circle'}
              compareWithCode="12345"
              autoFocus={false}
              codeInputStyle={{ fontWeight: '800' }}
              onFulfill={(isValid, code) =>
                this._onFinishCheckingCode2(isValid, code)
              }
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
