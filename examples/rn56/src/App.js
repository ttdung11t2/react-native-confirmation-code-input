import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import ActiveColorDemo from './propsDemos/ActiveColor';
import InactiveColorDemo from './propsDemos/InactiveColor';
import CellBorderWidthDemo from './propsDemos/CellBorderWidth';
import SpaceDemo from './propsDemos/Space';
import SizeDemo from './propsDemos/Size';
import VariantDemo from './propsDemos/Variant';
import PositionDemo from './propsDemos/InputPosition';

import RedExample from './realDemo/RedExample';
import DarkExample from './realDemo/DarkDemo';

import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ActiveColorDemo />
          <InactiveColorDemo />
          <CellBorderWidthDemo />
          <SpaceDemo />
          <SizeDemo />
          <PositionDemo />
          <VariantDemo />

          <RedExample />
          <DarkExample />
        </ScrollView>
      </View>
    );
  }
}
