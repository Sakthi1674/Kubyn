import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NumVerify from './src/screens/createaccount/NumVerify';
import NumOtp from './src/screens/createaccount/NumOtp';
import CreateAccount from './src/screens/createaccount/CreateAccount';
import Login from './src/screens/login/Login';
import LoginNumOtp from './src/screens/login/LoginNumOtp';
import LoginSuccess from './src/screens/login/LoginSuccess';
import ForgetPassword from './src/screens/forgetpassword/ForgetPassword';
import ForgetPasswordOtp from './src/screens/forgetpassword/ForgetPasswordOtp';
import PasswordReset from './src/screens/forgetpassword/PasswordReset';
import ForgetPasswordSuccess from './src/screens/forgetpassword/ForgetPasswordSuccess';
import WelcomePage from './src/screens/welcome/WelcomePage';
import SplashScreen from './src/screens/welcome/SplashScreen';
 
 
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
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginNumOtp"
          component={LoginNumOtp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginSuccess"
          component={LoginSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPasswordOtp"
          component={ForgetPasswordOtp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordReset"
          component={PasswordReset}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPasswordSuccess"
          component={ForgetPasswordSuccess}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;
 
 