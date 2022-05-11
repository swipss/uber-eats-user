import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
import AuthContextProvider from './src/contexts/AuthContext';

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';
Amplify.configure({...awsconfig, Analytics: {disabled: true}})

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <RootNavigator />
      </AuthContextProvider>
        <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App)


