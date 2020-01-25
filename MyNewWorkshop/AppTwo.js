/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Button } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import JavaModule from './JavaModule';
import JavaModuleActivity from './JavaModuleActivity';
import {Swift} from './Swift'

const AppTwo= ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hola App2</Text>
        <Button title="Navigate to ReactView" onPress ={() => navigation.navigate('AppThree')}/>
        <Button
                title="Say hi from java"
                onPress={() =>
                  JavaModule.returnStringFromJava('lorenxo el gato', result => {
                    Alert.alert(result);
                  })
                }
              />
        <Button
          title="Navidation from java"
          onPress={() =>
            JavaModuleActivity.openJavaActivity()
          }
        />
        <Button
          title="Say Hi from iOS"
          onPress={() =>
            Swift.getValueFromScreen('lorenxo el gato ', result => {
              Alert.alert(result);
            })
          }
        />
        <Button
            title="Open iOS"
            onPress={() => navigation.navigate('SwiftView')}
          />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default AppTwo;
