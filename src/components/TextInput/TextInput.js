// @flow

import React, { Component } from 'react';
import { TextInput } from 'react-native';

import { omit } from '../../omit';

type Props = {
  +id: number,
  +onChangeText: (string, number) => void,
  +onFocus: number => void,
  +forwardRef: (?TextInput, number) => void,
};

export default class TextInputCustom extends Component<Props> {
  onChangeText = (text: string) => this.props.onChangeText(text, this.props.id);

  onFocus = () => this.props.onFocus(this.props.id);

  inputRef = (ref: ?TextInput) => this.props.forwardRef(ref, this.props.id);

  render() {
    return (
      <TextInput
        {...omit(['id', 'forwardRef'], this.props)}
        ref={this.inputRef}
        onChangeText={this.onChangeText}
        onFocus={this.onFocus}
      />
    );
  }
}
