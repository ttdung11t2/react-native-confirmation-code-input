import React, { Component, createRef } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';

import styles from './styles';
import CodeInput from 'react-native-confirmation-code-field';

export default class ExampleApp extends Component {
  codeInputRef1 = createRef();

  onFulfill = code => {
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

      this.codeInputRef1.current.clear();
    }
  };

  onFinishCheckingCode1 = (code, isValid) => {
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
  };

  // "isValid" prop will be "true|false" when you set "compareWithCode" prop
  onFinishCheckingCode2 = (code, isValid) => {
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
  };

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
              ref={this.codeInputRef1}
              variant="border-b"
              space={5}
              size={30}
              inputPosition="left"
              onFulfill={this.onFulfill}
              onChangeCode={code => console.log(code)}
              getInputProps={() => ({
                secureTextEntry: true,
              })}
            />
          </View>

          <View style={styles.inputWrapper2}>
            <Text style={styles.inputLabel2}>BOX CONFIRMATION CODE</Text>
            <CodeInput
              autoFocus={false}
              compareWithCode="AsDW2"
              whenCompareIgnoreCase
              activeColor="rgba(49, 180, 4, 1)"
              inactiveColor="rgba(49, 180, 4, 1.3)"
              inputPosition="center"
              size={50}
              onFulfill={this.onFinishCheckingCode1}
              containerProps={{
                style: { marginTop: 30 },
              }}
              getInputProps={() => ({
                secureTextEntry: true,
                style: { borderWidth: 1.5 },
              })}
            />
          </View>

          <View style={styles.inputWrapper3}>
            <Text style={styles.inputLabel3}>CIRCLE CONFIRMATION CODE</Text>
            <CodeInput
              codeLength={6}
              variant="border-circle"
              compareWithCode="123456"
              autoFocus={false}
              // I don't recommend you use arrow function or .bind()
              getInputProps={() => ({
                style: { fontWeight: '800' },
                keyboardType: 'numeric',
              })}
              getCodeInputStyle={(index, isActive, hasValue) => {
                if (hasValue) {
                  return { borderColor: 'transparent' };
                }
                return null;
              }}
              onFulfill={this.onFinishCheckingCode2}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
