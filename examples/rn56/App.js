import React, { Component, createRef } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

import CodeFiled from 'react-native-confirmation-code-field';

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
          {/*concept : https://dribbble.com/shots/4766183-Code-Verification-UI-Design */}
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#2f3d6c', '#161e3c']}
            style={styles.linearGradient5}
          >
            <View>
              <Text style={styles.inputLabel5}>Confirmation</Text>
              <Text style={styles.inputSubLabel5}>
                Please enter the code sent we sent to the number + 375 (25) xxxx
                xx 13
              </Text>
              <CodeFiled
                inputPosition="full-width"
                variant="clear"
                codeLength={4}
                compareWithCode="1234"
                getInputProps={() => ({
                  keyboardType: 'numeric',
                  style: styles.input5,
                })}
                getCodeInputStyle={(index, isActive, hasValue) => {
                  if (hasValue) {
                    return styles.input5NotEmpty;
                  }
                  return null;
                }}
                containerProps={{ style: styles.inputWrapStyle4 }}
                onFulfill={this.onFinishCheckingCode2}
              />
              <Text style={styles.resetCode5}>RESEND CODE</Text>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#8096ee', '#a571ff']}
                style={styles.nextButton5}
              >
                <Text style={styles.nextButtonText5}>Confirm</Text>
              </LinearGradient>
            </View>
          </LinearGradient>

          {/*concept : https://dribbble.com/shots/3246445-OTP-Screen-2-0*/}
          <LinearGradient
            colors={['#ff595f', '#e42959']}
            style={styles.linearGradient4}
          >
            <View style={styles.inputWrapper4}>
              <Text style={styles.inputLabel4}>Verification Code</Text>
              <Text style={styles.inputSubLabel4}>
                Please type the validation code sent
              </Text>
              <Text style={styles.inputSubLabel4}>to + 375 (25) 666 00 00</Text>
              <CodeFiled
                variant="clear"
                codeLength={6}
                compareWithCode="123456"
                getInputProps={() => ({
                  keyboardType: 'numeric',
                  style: styles.input4,
                })}
                getCodeInputStyle={(index, isActive, hasValue) => {
                  if (hasValue) {
                    return styles.input4NotEmpty;
                  }
                  return null;
                }}
                containerProps={{ style: styles.inputWrapStyle4 }}
                onFulfill={this.onFinishCheckingCode2}
              />
              <View style={styles.nextButton4}>
                <View style={styles.nextButtonArrow4} />
              </View>
            </View>
          </LinearGradient>

          <View style={styles.titleWrapper}>
            <Text style={styles.title}>CODE INPUT DEMO</Text>
          </View>

          <View style={styles.inputWrapper1}>
            <Text style={styles.inputLabel1}>UNDERLINE CONFIRMATION CODE</Text>
            <CodeFiled
              ref={this.codeInputRef1}
              variant="border-b"
              space={5}
              size={30}
              inputPosition="left"
              onFulfill={this.onFulfill}
              onChangeCode={code => console.log(code)}
              getInputProps={() => ({ secureTextEntry: true })}
            />
          </View>

          <View style={styles.inputWrapper2}>
            <Text style={styles.inputLabel2}>BOX CONFIRMATION CODE</Text>
            <CodeFiled
              compareWithCode="AsDW2"
              ignoreCaseWhenCompareCode
              activeColor="rgba(49, 180, 4, 1)"
              inactiveColor="rgba(49, 180, 4, 1.3)"
              inputPosition="center"
              size={50}
              onFulfill={this.onFinishCheckingCode1}
              containerProps={{ style: { marginTop: 30 } }}
              getInputProps={() => ({
                secureTextEntry: true,
                style: { borderWidth: 1.5 },
              })}
            />
          </View>

          <View style={styles.inputWrapper3}>
            <Text style={styles.inputLabel3}>CIRCLE CONFIRMATION CODE</Text>
            <CodeFiled
              codeLength={6}
              variant="border-circle"
              compareWithCode="123456"
              getInputProps={
                () => ({
                  style: { fontWeight: '800' },
                  keyboardType: 'numeric',
                }) // I don't recommend you use arrow function or .bind()
              }
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
