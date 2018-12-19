// @flow
import { TextInput } from 'react-native';

class TextInputCustom extends TextInput {
  _onPress = event => {
    const { onPress, editable } = this.props;

    if (onPress) {
      onPress(event);
    }

    if (editable || editable === undefined) {
      this.focus();
    }
  };
}

export default TextInputCustom;
