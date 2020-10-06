import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import { AuthProvider } from './src/services/auth'

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;