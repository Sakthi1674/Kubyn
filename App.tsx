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
import AccountScreen from './src/screens/ProfileSection/Account/AccountScreen';
import MySubscriptions from './src/screens/ProfileSection/Account/MySubscription';
import DownloadStatements from './src/screens/ProfileSection/Account/DownloadStatement';
import ProfileScreen from './src/screens/ProfileSection/ProfileField/ProfileScreen';
import ChangePreference from './src/assets/icons/ChangePreference';
import ChangePreferenceScreen from './src/screens/ProfileSection/Account/ChangePrefrence';
import DeleteAccount from './src/screens/ProfileSection/Account/DeleteAccount/DeleteAccount';
import AccountDeleteVerification from './src/screens/ProfileSection/Account/DeleteAccount/ReasonToDelete';
import SecurityScreen from './src/screens/ProfileSection/Security/Security';
import CurrentPassword from './src/screens/ProfileSection/Security/CurrentPassword ';
import LinkedScreen from './src/screens/ProfileSection/Security/LinkedScreen';
import LinkedOtpScreen from './src/screens/ProfileSection/Security/LinkedOtpScreen';
import CurrentPin from './src/screens/ProfileSection/Security/PinLock/CurrentPin';
import SetPin from './src/screens/ProfileSection/Security/PinLock/SetPin';
import ResetPin from './src/screens/ProfileSection/Security/PinLock/ResetPin';
import LoginActivity from './src/screens/ProfileSection/Security/Activity';
import ForgetPin from './src/screens/ProfileSection/Security/PinLock/ForgetPin';
import AppSettingsScreen from './src/screens/ProfileSection/AppSetting/AppSetting';
import LegalPolicies from './src/screens/ProfileSection/AppSetting/LegalandPolicies';
import HelpCentreScreen from './src/screens/ProfileSection/AppSetting/HelpCenter';
import HeyScreen from './src/screens/Questions/HeyScreen';
import DemoGraphicQues from './src/screens/Questions/DemoGraphicQues';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ProfileScreen}
          component={HeyScreen}
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
         <Stack.Screen
          name="HeyScreen"
          component={HeyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MySubscriptions"
          component={MySubscriptions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DownloadStatements"
          component={DownloadStatements}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePrefrence"
          component={ChangePreferenceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DeleteAccount"
          component={DeleteAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountDeleteVerification"
          component={AccountDeleteVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SecurityScreen"
          component={SecurityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CurrentPassword"
          component={CurrentPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LinkedScreen"
          component={LinkedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LinkedOtpScreen"
          component={LinkedOtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CurrentPin"
          component={CurrentPin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPin"
          component={ForgetPin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SetPin"
          component={SetPin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPin"
          component={ResetPin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginActivity"
          component={LoginActivity}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppSettingsScreen"
          component={AppSettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HelpCentre"
          component={HelpCentreScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LegalPolicies"
          component={LegalPolicies}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DemoGraphicQues"
          component={DemoGraphicQues}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

