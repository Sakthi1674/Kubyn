import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NumVerify from './src/screens/createaccount/NumVerify';
import SplashScreen from './src/screens/welcome/SplashScreen';
import WelcomePage from './src/screens/welcome/WelcomePage';
import NumOtp from './src/screens/createaccount/NumOtp';
import CreateAccount from './src/screens/createaccount/CreateAccount';

 
 
const Stack = createNativeStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NumVerify"
          component={NumVerify}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NumOtp"
          component={NumOtp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;
 
 