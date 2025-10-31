import { Button } from "react-native-web";
import Notification from "../screens/Notication/Notification";


// Light Theme Colors
export const lightColors = {
  background: '#FBFDFF',
  text: '#121212',
  bttext: '#FBFDFF',
  textSecondary: '#666666',
  notification: '#FD9D9D',
  icon: "#D1D1D6",
  Button: "#223F61",
  radio: "#223F61",
  buttondark: "#223F61",
  buttonDisabled:"#98989F",
  buttondark:"#E3E9F1",
  bar:"#223F61",
  option:"#F0F4F9",
  DOB:"rgba(69, 85, 105, 0.08)",
  Success:"#223F61",
  Profilebg:"#223F61",
  green:"rgba(94, 170, 34, 1)",
};

// Dark Theme Colors
export const darkColors = {
  background: '#2F2F2F',
  text: '#FAFBFB',
  bttext:'#2F2F2F',
  textSecondary: '#98989F',
  notification: '#E74C3C',
  icon: "#D1D1D6",
  Button: "#E3E9F1",
  radio: "#E3E9F1",
  buttondark: "#3A3A3A",
  buttonDisabled:"#E3E9F1CC",
  bar:"#223F61",
  option:"#3A3A3A",
  DOB:"#E3E9F1CC",
  Success:"#2F2F2F",
  Profilebg:"#3A3A3A",
  green:"rgba(94, 170, 34, 1)",
};

// Combined theme object
export const colors = {
  light: lightColors,
  dark: darkColors,
};

// Default export
export default colors;