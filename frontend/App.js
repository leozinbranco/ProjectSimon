import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import { AuthProvider } from './src/services/auth'
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;