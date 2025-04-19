import React from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

const MotivationBanner = () => {
  return (
    <View className="bg-gradient-to-r from-green-800 to-green-400 p-4 rounded-2xl shadow-lg">
      <Animatable.Text
        animation="fadeInDown"
        iterationCount="infinite"
        direction="alternate"
        className="text-white text-xl text-center font-bold"
      >
        உன்னால் முடியும் தோழா 💪{'\n'}உன்னைத் தான் சொல்றேன்
      </Animatable.Text>
    </View>
  );
};

export default MotivationBanner;
