// @flow
import React, { Component, type ElementConfig } from 'react';
import { Text } from 'react-native';

import type { LayoutEvent } from 'react-native/Libraries/Types/CoreEventTypes';
type Props = $ReadOnly<{|
  ...$Exact<$Diff<ElementConfig<typeof Text>, { onLayout: any }>>,
  index: number,
  onLayout: (number, LayoutEvent) => mixed,
|}>;

class TextCustom extends Component<Props> {
  handlerOnLayout = (event: LayoutEvent) => {
    const { onLayout, index } = this.props;

    if (onLayout) {
      onLayout(index, event);
    }
  };

  render() {
    // $FlowFixMe
    return <Text {...this.props} onLayout={this.handlerOnLayout} />;
  }
}

export default TextCustom;
