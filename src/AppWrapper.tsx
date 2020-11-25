import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {IPad, IPhone6} from 'react-device-mockups';
import RootStack from './screens';

import 'html5-device-mockups/dist/device-mockups.min.css';

const AppWrapper = () => {
  const [mockupIndex, setMockupIndex] = useState(0);

  const Mockup = [IPad, IPhone6][mockupIndex];
  const onChangeMock = () => setMockupIndex((mockupIndex + 1) % 2);
  return (
    <View style={{alignItems: 'center'}}>
      <Mockup height={800}>
        <View style={{height: '100%', width: '100%'}}>
          <RootStack />
        </View>
      </Mockup>
      <Button onPress={onChangeMock} title="Trocar mockup" />
    </View>
  );
};

export default AppWrapper;
