import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import _ from 'lodash';

const {width: wWidth} = Dimensions.get('window');

export default class ConfirmationCodeInput extends Component {
  static propTypes = {
    codeLength: PropTypes.number,
    codeInputStyle: TextInput.propTypes.style,
    codeInputWrapperStyle: View.propTypes.style,
    onFulfill: PropTypes.func
  };
  
  static defaultProps = {
    codeLength: 5
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
      codeArr: new Array(this.props.codeLength).fill(''),
      currentIndex: 0
    };
    
    this.codeInputRefs = [];
  }
  
  clear() {
    this.setState({
      codeArr: new Array(this.props.codeLength).fill(''),
      currentIndex: 0
    })
    this._setFocus(0);
  }
  
  _setFocus(index) {
    this.codeInputRefs[index].focus();
  }
  
  _blur(index) {
    this.codeInputRefs[index].blur();
  }
  
  _onFocus(index) {
    let newCodeArr = _.clone(this.state.codeArr);
    for (const i in newCodeArr) {
      if (i >= index) {
        newCodeArr[i] = '';
      }
    }
    
    this.setState({
      codeArr: newCodeArr,
      currentIndex: index
    })
  }
  
  _onInputCode(character, index) {
    const {codeLength, onFulfill} = this.props;
    let newCodeArr = _.clone(this.state.codeArr);
    newCodeArr[index] = character;
    
    if (index == codeLength - 1) {
      this._blur(this.state.currentIndex);
      onFulfill(newCodeArr.join(''));
    } else {
      this._setFocus(this.state.currentIndex + 1);
    }
    
    this.setState(prevState => {
      return {
        codeArr: newCodeArr,
        currentIndex: prevState.currentIndex + 1
      };
    });
    
  }
  
  render() {
    const {
      codeLength,
      codeInputStyle,
      codeInputWrapperStyle
    } = this.props;
    
    let codeInputs = [];
    for (let i = 0; i < codeLength; i++) {
      const id = i;
      let borderStyle = this.state.currentIndex == id ? {} : {borderColor: 'rgba(255, 255, 255, 0.1)'};
      codeInputs.push(
        <TextInput
          autoFocus={id == 0}
          key={id}
          ref={ref => (this.codeInputRefs[id] = ref)}
          onChangeText={text => this._onInputCode(text, id)}
          onFocus={() => this._onFocus(id)}
          value={this.state.codeArr[id] ? this.state.codeArr[id].toString() : ''}
          style={[styles.codeInput, codeInputStyle, borderStyle]}
          returnKeyType={'done'}
          autoCapitalize="characters"
          autoCorrect={true}
          {...this.props}
          maxLength={1}
        />
      )
    }
    
    return (
      <View style={[styles.codeInputWrapper, codeInputWrapperStyle]}>
        {codeInputs}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  codeInputWrapper: {
    width: '35%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  codeInput: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    flex: 1,
    marginRight: 4,
    borderBottomWidth: 1,
    borderColor: '#fff'
  }
});