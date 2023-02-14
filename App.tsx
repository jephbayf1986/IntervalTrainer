import React from 'react';

import AppContext from './src/components/AppContext/AppContext';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {

  return (
    <AppContext>
      <AppNavigation />
    </AppContext>
  );
}