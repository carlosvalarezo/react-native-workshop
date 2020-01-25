import React from 'react';
import {requireNativeComponent, View} from 'react-native';

const SwiftViewiOS = requireNativeComponent('SwiftView');

const SwiftView = () => {
  return (
    <View>
      <SwiftViewiOS />
    </View>
  );
};

export default SwiftView;