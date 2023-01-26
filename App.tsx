import React from 'react';
import { Text } from 'react-native';
import { AppContainer } from './src/components/app-container/app-container.component';

export default function App() {

  return (
    <AppContainer backgroundColor='red'>
      <Text>Typescript App is live</Text>
    </AppContainer>
  );
}