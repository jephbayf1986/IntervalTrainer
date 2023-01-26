import React from 'react';
import { Text } from 'react-native';
import { AppContainer } from './src/components/app-container/app-container.component';
import { AppContext } from './src/components/app-context/app-context.component';

export default function App() {

  return (
    <AppContext>
      <AppContainer backgroundColor='red'>
        <Text>Typescript App is live</Text>
      </AppContainer>
    </AppContext>
  );
}